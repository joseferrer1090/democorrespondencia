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
import {
  dataCorrespondence,
  filterData,
  loadpaginationperpage,
} from "./../../../../../../../actions/dataCorrespondenceExternalAction";
import IMGERROR from "./../../../../../../../assets/img/spam.png";
import Pagination from "react-js-pagination";
import InputSearch from "./InputSearch";

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
      activePage: null,
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

  getPagination = (page, size) => {
    this.props.pagination(page, size);
  };

  handlePageChange(page, size) {
    console.log(`active page is ${page}`);
    this.setState({ activePage: this.props.number + 1 }, () => {
      this.getPagination(page, (size = 10));
    });
  }

  render() {
    const { data } = this.state;
    const { allcontent, size, totalElements, number, valuesearch } = this.props;
    // console.log(pending);
    // console.log(this.props);
    // console.log(data);

    const aux = Object.keys(data).length ? "Datos" : "No datos";

    return (
      <div className="col-md-12 card">
        <div className="card-body">
          <React.Fragment>
            <div className="row">
              <div className="col-md-7" style={{ padding: 0 }}>
                <div className="form-group">
                  <InputSearch />
                </div>
              </div>
              <div className="col-md-5">
                <Pagination
                  itemClass="page-item"
                  linkClass="page-link"
                  activePage={this.state.activePage}
                  itemsCountPerPage={size}
                  totalItemsCount={totalElements}
                  onChange={this.handlePageChange.bind(this)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" style={{ padding: 0 }}>
                <div className="table">
                  <table className="table table-hover table-sm table-condensed">
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
                    {allcontent.length ? (
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
                    ) : (
                      <tbody>
                        <tr>
                          <td colSpan={6}>
                            <div className="jumbotron">
                              <h6 className="text-center">No hay datos</h6>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
            </div>
          </React.Fragment>
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
    number: state.dataCorrespondenceExternal.number,
    valuesearch: state.dataCorrespondenceExternal.valuesearch,
    totalPages: state.dataCorrespondenceExternal.totalPages,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getData: () => {
      dispatch(dataCorrespondence());
    },
    filter: (data) => {
      dispatch(filterData(data));
    },
    pagination: (page, size) => {
      dispatch(loadpaginationperpage(page, size));
    },
  };
};

export default connect(mapState, mapDispatch)(ContentComponent);
