import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
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
  Button,
  FormGroup,
} from "reactstrap";
import Pagination from "react-js-pagination";
import moment from "moment";
import { PAGINATION_EXTERNAL_CORRESPONDENCE_RECEIVED } from "../../../../../../../services/EndPoints";
import "./components/css/table_inbox.css";
import "./components/css/TableInboxFixed.css";
import "./../../../../../../../css/ContentComponentExternalCorrespondence.css";
import { disabled } from "glamor";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      term: "",
      tblData: "",
      chkrow: false,
      checkall: false,
      idCorrespondenceSelected: null,
      auth: this.props.authorization,

      dataInbox: [],
      itemsCountPerPage: 5,
      currentPage: 1,
      totalPages: null,
      totalElements: null,
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
    const { currentPage } = this.state;
    if (this.props.authorization !== prevProps.authorization) {
      this.setState({
        auth: this.props.authorization,
        idCorrespondenceSelected: [],
      });
      this.getDataInbox(currentPage);
    }
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  getDataInbox = (currentPage) => {
    const { itemsCountPerPage } = this.state;
    currentPage -= 1;
    fetch(
      `${PAGINATION_EXTERNAL_CORRESPONDENCE_RECEIVED}?page=${currentPage}&size=${itemsCountPerPage}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.props.authorization,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          dataInbox: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          itemsCountPerPage: data.size,
          currentPage: data.number + 1,
        });
      })
      .catch((Error) => console.log(" ", Error));
  };

  tipoDocumento = (data) => {
    let tipo = null;
    if (data === "documento") {
      return (tipo = <i className="fa fa-file-text-o" title={`documento`} />);
    } else if (data === "tramite") {
      return (tipo = <i className="fa fa-folder-open-o" title={`tramite`} />);
    }
    return null;
  };

  stateDocumento = (data) => {
    let estado = null;

    if (data === "new") {
      return (estado = "table-dataNew");
    } else if (data === "out of time") {
      return (estado = "table-dataOutoftime");
    } else if (data === "read") {
      return (estado = "table-dataRead");
    }
    return null;
  };

  handleSearchInput = (event) => {
    this.setState({ term: event.target.value });
  };

  searchingFor = (term) => {
    return function (x) {
      return x.asunto.includes(term);
    };
  };

  getSelect = () => {
    const message = "";
    const gird = this.state.tblData;
    const checkbox = gird.getElementsByTagName("INPUT");
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        this.setState({
          idCorrespondenceSelected: this.state.idCorrespondenceSelected.push(
            checkbox[i].parentNode.parentNode.firstChild.innerHTML
          ),
        });
      }
    }
    console.log("", message);
  };

  DocumentDate(date) {
    let documentDate;
    documentDate = new Date(date);
    return moment(documentDate).format("DD-MM-YYYY");
  }

  /* datos server */

  dataTableInbox = () => {
    const datainbox = this.state.dataInbox.map((aux, i) => {
      return (
        <tr
          className={`${this.stateDocumento(
            "new"
          )} table-externalCorrespondence`}
        >
          <td className="hidden" style={{ display: "none" }}>
            {aux.id}
          </td>
          <td className="inbox-small-cells">
            <input
              name="foo"
              type="checkbox"
              className="mail-checkbox"
              defaultChecked={this.state.chkrow}
              onChange={(e) => {
                this.setState({ chkrow: e.target.value });
              }}
            />
          </td>

          <td className="inbox-small-cells">
            {this.tipoDocumento("documento")}
          </td>

          <td className="view-message dont-show">{aux.headquarter}</td>

          <td className="view-message">{aux.consecutive}</td>

          <td>
            <Link to={`/correspondence/external/view/${aux.id}`}>
              <i className="fa fa-paperclip" />
              {aux.issue}
            </Link>
          </td>

          <td className="view-message inbox-small-cells">
            {this.DocumentDate(aux.documentDate)}
          </td>
        </tr>
      );
    });
    return datainbox;
  };

  /* hasta acá */
  toggleCheckboxes = (source, cbName) => {
    for (var i = 0, n = document.getElementsByName(cbName).length; i < n; i++) {
      document.getElementsByName(cbName)[i].checked = source;
    }
  };

  handlePageChange = (event) => {
    let targetPage = parseInt(event.target.value);

    this.getDataInbox(targetPage);
    this.setState({
      [event.target.value]: targetPage,
    });
  };

  firstPage = () => {
    const { currentPage } = this.state;
    let firstPage = 1;
    if (currentPage > firstPage) {
      this.getDataInbox(firstPage);
    }
  };

  prevPage = () => {
    const { currentPage } = this.state;
    let prevPage = 1;
    if (currentPage > prevPage) {
      this.getDataInbox(currentPage - prevPage);
    }
  };

  lastPage = () => {
    const { currentPage } = this.state;
    let condition = Math.ceil(
      this.state.totalElements / this.state.itemsCountPerPage
    );
    if (currentPage < condition) {
      this.getDataInbox(condition);
    }
  };

  nextPage = () => {
    const { currentPage } = this.state;
    if (
      currentPage <
      Math.ceil(this.state.totalElements / this.state.itemsCountPerPage)
    ) {
      this.getDataInbox(currentPage + 1);
    }
  };

  render() {
    const { currentPage, totalPages } = this.state;
    const pageNumCss = {
      width: "45px",
      boder: "1px solid #17A2B8",
      color: "#17A2B8",
      textAling: "center",
      fontWeight: "bold",
    };
    return (
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
                <Col md="6">
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        {/* <i className="icon-search" /> */}
                        <i class="fa fa-search"></i>
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
                <Col md="6">
                  <div className="float-left">
                    Showing Page {currentPage} of {totalPages}
                  </div>
                  <div className="float-right">
                    <InputGroup size="sm">
                      {" "}
                      <InputGroupAddon addonType="prepend">
                        <Button
                          className="btn btn-sm"
                          type="button"
                          variant="outline-info"
                          // disabled={currentPage === 1 ? true : false}
                          onClick={this.firstPage}
                        >
                          First
                        </Button>
                        <Button
                          className="btn btn-sm"
                          type="button"
                          variant="outline-info"
                          // disabled={currentPage === 1 ? true : false}
                          onClick={this.prevPage}
                        >
                          Prev
                        </Button>
                      </InputGroupAddon>
                      <Input
                        style={pageNumCss}
                        className="bg-dark"
                        name="currentPage"
                        value={currentPage}
                        onChange={this.handlePageChange}
                      />
                      <InputGroupAddon addonType="append">
                        <Button
                          className="btn btn-sm"
                          type="button"
                          variant="outline-info"
                          // disabled={currentPage === totalPages ? true : false}
                          onClick={this.nextPage}
                        >
                          Next
                        </Button>
                        <Button
                          className="btn btn-sm"
                          type="button"
                          variant="outline-info"
                          // disabled={currentPage === totalPages ? true : false}
                          onClick={this.lastPage}
                        >
                          Last
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>

                    {/* <Pagination
                      hideNavigation
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={3}
                      itemClass="page-item"
                      linkClass="btn btn-light"
                      onChange={this.handlePageChange}
                    /> */}
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
                          {this.dataTableInbox()}
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

export default ContentComponent;
