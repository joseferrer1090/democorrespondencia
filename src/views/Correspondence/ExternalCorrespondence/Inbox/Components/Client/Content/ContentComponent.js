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
  Pagination,
} from "reactstrap";
import { Link } from "react-router-dom";
import Data2 from "./../../../../../../../services/data_inbox_extern.json";
import "./components/css/table_inbox.css";
import "./components/css/TableInboxFixed.css";
import "./../../../../../../../css/ContentComponentExternalCorrespondence.css";
import { connect } from "react-redux";
import {
  dataCorrespondence,
  filterData,
  loadpaginationperpage,
} from "./../../../../../../../actions/dataCorrespondenceExternalAction";
import IMGERROR from "./../../../../../../../assets/img/spam.png";
import InputSearch from "./InputSearch";
import ReactPaginate from "react-paginate";

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
      auth: this.props.authorization,
      pageCount: null,
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
    // this.props.getData();
  }

  getInformation = () => {
    this.props.getData();
  };

  getPagination = (page) => {
    this.props.pagination(page);
  };

  handlePageChange(page) {
    console.log(page);
    this.getPagination(page);
  }
  handlePageClick = (data) => {
    let selected = data.selected;
    console.log(selected);
    this.props.pagination(selected);
  };
  render() {
    const { data } = this.state;
    const {
      allcontent,
      size,
      totalElements,
      number,
      valuesearch,
      totalPages,
    } = this.props;
    const pageCount = totalElements / size;

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
                <ReactPaginate
                  pageCount={totalPages}
                  pageRangeDisplayed={number}
                  marginPagesDisplayed={totalElements}
                  onPageChange={this.handlePageClick}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" style={{ padding: 0 }}>
                <div className="table">
                  <table className="table table-hover table-sm table-condensed">
                    <thead>
                      <tr>
                        <th style={{ width: "auto" }}>
                          <input type="checkbox" />
                        </th>
                        <th>Sede</th>
                        <th>No.Radicacion</th>
                        <th>Asunto</th>
                        <th>Fecha de Radicacion</th>
                        <th>Destinatarios</th>
                        <th>Acciones</th>
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
                              <td>
                                <div className="">
                                  <button
                                    title="Ver correspondencia"
                                    type="button"
                                    className="btn btn-secondary btn-sm"
                                  >
                                    <i className="fa fa-eye" />
                                  </button>
                                  &nbsp;
                                  <button
                                    title="editar y/o completar correspondencia"
                                    type="button"
                                    className="btn btn-secondary btn-sm"
                                  >
                                    <i className="fa fa-pencil" />
                                  </button>
                                  &nbsp;
                                  <button
                                    className="btn btn-secondary btn-sm"
                                    title="agregar nota"
                                  >
                                    <i className="fa fa-sticky-note" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    ) : (
                      <tbody>
                        <tr>
                          <td colSpan={7}>
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
    pagination: (page) => {
      dispatch(loadpaginationperpage(page));
    },
  };
};

export default connect(mapState, mapDispatch)(ContentComponent);
