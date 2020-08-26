import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import Data2 from "./../../../../../../../services/data_inbox_extern.json";
import "./components/css/table_inbox.css";
import "./components/css/TableInboxFixed.css";
import "./../../../../../../../css/ContentComponentExternalCorrespondence.css";
import moment from "moment";
import {
  EXTERNAL_CORRESPONDENCE_RECEIVED,
  EXTERNAL_CORRESPONDENCE_PAGINATION,
} from "../../../../../../../services/EndPoints";
import { connect } from "react-redux";
import { dataCorrespondence } from "./../../../../../../../actions/dataCorrespondenceExternalAction";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data2,
      dropdownOpen: false,
      term: "",
      tblData: "",
      chkrow: false,
      checkall: false,
      idCorrespondenceSelected: null,
      dataInbox: [],
      auth: this.props.authorization,
    };
  }

  static getDerivedStaticFromProps(props, state) {
    if (props.authorization !== state.auth) {
      return {
        auth: props.authorization,
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.authorization !== prevProps.authorization) {
      this.setState({
        auth: this.props.authorization,
        idCorrespondenceSelected: [],
      });
      this.getInformation();
    }
  }

  componentDidMount() {
    this.props.getData();
    console.log(this.props.content);
    console.log(this.props.pending);
  }

  getInformation = () => {
    this.props.getData();
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  handleSearchInput = (event) => {
    this.setState({ term: event.target.value });
  };

  searchingFor = (term) => {
    return function (x) {
      return x.asunto.includes(term);
    };
  };

  render() {
    const { dataInbox } = this.state;
    // console.log(dataInbox);
    const { content, pending } = this.props;
    console.log(pending);
    console.log(this.props);
    return (
      // <div className="animated fadeIn">
      // <br />
      <div className="d-none d-sm-block" style={{ marginTop: "1px" }}>
        <Container style={{ marginLeft: "0px", padding: "0" }}>
          <Card>
            <CardHeader
              className="text-center"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              <i className="icon-drawer" /> &nbsp; Bandeja de correspondencia
              recibida vigencia 2020
            </CardHeader>
            <CardBody>
              <Row style={{ borderColor: "#C38282", borderWidth: "1px" }}>
                {/* <Col md="3">
                  <ButtonDropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                  >
                    <DropdownToggle caret size="sm">
                      Acciones
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={() => this.getSelect()}>
                        Seleccionar todo
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </Col> */}
                <Col md="9">
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        {/* <i className="icon-search" /> */}
                        <i className="fa fa-search"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      className="form-control"
                      style={{ width: "auto" }}
                      placeholder={`Buscar correspondencia`}
                      onChange={(e) => this.handleSearchInput(e)}
                    />
                  </InputGroup>
                </Col>
                <Col md="3">
                  <div className="float-right">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="fa fa-angle-double-left" />
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item ">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="fa fa-angle-double-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Container>
                <Row>
                  <Col md="12" style={{ padding: "0" }}>
                    <div className="table-responsive">
                      <table
                        id="tablefixed"
                        className="table table-sm"
                        // style={{ backgroundColor: "#F0F3F5" }}
                      >
                        <thead>
                          <tr
                            className="text-center"
                            style={{ background: "#45B254 !important" }}
                          >
                            <th style={{ width: "10px" }}>
                              <input
                                type="checkbox"
                                onClick={() =>
                                  this.setState(
                                    {
                                      checkall: !this.state.checkall,
                                    },
                                    () =>
                                      this.toggleCheckboxes(
                                        this.state.checkall,
                                        "foo"
                                      )
                                  )
                                }
                              />
                            </th>
                            <th style={{ width: "10px" }}>Tipo</th>
                            <th style={{ width: "100px" }}>Sede</th>
                            <th style={{ width: "10px" }}>Consecutivo</th>
                            <th style={{ width: "50px" }}>Asunto</th>
                            <th style={{ width: "50px" }}>Fecha</th>
                            <th style={{ width: "50px" }}>Destinatarios</th>
                          </tr>
                        </thead>
                        <tbody
                          className="text-center"
                          style={{
                            height: "200px",
                            overflowY: "auto",
                            width: "100%",
                          }}
                        >
                          {/* {datainbox} */}
                          {/* {this.dataTableInbox()} */}
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

ContentComponent.propTypes = {};

const mapState = (state) => {
  return {
    content: state.dataCorrespondenceExternal.received,
    pending: state.dataCorrespondenceExternal.pending,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getData: () => {
      dispatch(dataCorrespondence());
    },
  };
};

export default connect(mapState, mapDispatch)(ContentComponent);
