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
import IMGERROR from "./../../../../../../../assets/img/spam.png";
import Pagination from "react-js-pagination";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.datacorrespondence,
      dropdownOpen: false,
      term: "",
      tblData: "",
      chkrow: false,
      checkall: false,
      idCorrespondenceSelected: null,
      dataInbox: [],
      auth: this.props.authorization,
      activePage: 1,
    };
  }

  static getDerivedStateFromProps(state, props) {
    if (props.datacorrespondence !== state.data) {
      return {
        data: props.datacorrespondence,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.datacorrespondence !== prevState.data) {
      this.setState({
        data: this.props.datacorrespondence,
      });
    }
    return null;
  }

  componentDidMount() {
    this.props.getData();
  }

  getInformation = () => {
    this.props.getData();
  };

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    const { data } = this.state;
    const { allcontent, size, totalElements } = this.props;
    // console.log(pending);
    console.log(this.props);
    console.log(data);

    const aux = Object.keys(data).length ? "Datos" : "No datos";

    return (
      <div className="col-md-12 card">
        <div className="card-body">
          {Object.keys(data).length ? (
            <React.Fragment>
              <div className="row">
                <div className="col-md-7" style={{ padding: 0 }}>
                  <div className="form-group">
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      style={{
                        borderRadius: "10px",
                        textDecoration: "inherit",
                        fontFamily: "FontAwesome, Helvetica Neue",
                        fontStyle: "normal",
                        fontWeight: "normal",
                      }}
                      placeholder="&#xF002; Buscar correspondencia"
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={size}
                    totalItemsCount={totalElements}
                    pageRangeDisplayed={size}
                    onChange={this.handlePageChange.bind(this)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12" style={{ padding: 0 }}>
                  <div className="table-responsive">
                    <table className="table table-hover table-condensed table-sm">
                      <thead>
                        <tr>
                          <th style={{ width: "10px" }}>Tipo</th>
                          <th style={{ width: "100px" }}>Sede</th>
                          <th style={{ width: "10px" }}>Consecutivo</th>
                          <th style={{ width: "50px" }}>Asunto</th>
                          <th style={{ width: "50px" }}>Fecha</th>
                          <th style={{ width: "50px" }}>Destinatarios</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allcontent.map((correspondence, id) => {
                          return (
                            <tr key={id}>
                              <td>{correspondence.issue}</td>
                              <td>{correspondence.documentDate}</td>
                              <td>{correspondence.createdAt}</td>
                              <td>{correspondence.validity}</td>
                              <td>{correspondence.guide}</td>
                              <td>{correspondence.status}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <div className="col-md-12">
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={IMGERROR}
                  width="100"
                  height="100"
                  alt="disconnected"
                />
              </div>
              <h3 className="text-center text-danger">
                {" "}
                No tienes correspondencias recibidas
              </h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

ContentComponent.propTypes = {};

const mapState = (state) => {
  return {
    content: state.dataCorrespondenceExternal.received,
    pending: state.dataCorrespondenceExternal.pending,
    allcontent: state.dataCorrespondenceExternal.alldata,
    size: state.dataCorrespondenceExternal.size,
    totalElements: state.dataCorrespondenceExternal.totalElements,
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
