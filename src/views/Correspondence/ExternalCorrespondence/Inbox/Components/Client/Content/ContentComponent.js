import React, { Component } from "react";
import "./components/css/table_inbox.css";
import "./components/css/TableInboxFixed.css";
import "./../../../../../../../css/ContentComponentExternalCorrespondence.css";
import { connect } from "react-redux";
import {
  dataCorrespondence,
  filterData,
  loadPaginationReceived,
  loadPaginationPending,
} from "./../../../../../../../actions/dataCorrespondenceExternalAction";
import InputSearch from "./InputSearch";
import moment from "moment";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

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
      itemsCountPerPage: 5,
      currentPage: 1,
      totalPages: null,
      totalElements: null,
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

  toggleCheckboxes = (source, cbName) => {
    for (var i = 0, n = document.getElementsByName(cbName).length; i < n; i++) {
      document.getElementsByName(cbName)[i].checked = source;
    }
  };

  /* PAGINACIÓN */

  validatePagination = (page) => {
    let validationParameter;
    let propsFunction;
    if (this.props.allcontent.length !== 0) {
      this.props.allcontent.map((status, id) => {
        validationParameter = status.statusName;
      });
    }
    if (validationParameter !== "APROBADA") {
      propsFunction = this.props.paginationPending(page);
    } else {
      propsFunction = this.props.paginationReceived(page);
    }
    return propsFunction;
  };

  handlePageChange = (event) => {
    const currentPage = this.props.number;
    let targetPage = event.target.value;
    if (targetPage !== "") {
      this.validatePagination(targetPage);
    } else {
      this.validatePagination(currentPage);
    }
  };

  firstPage = () => {
    const currentPage = this.props.number;
    let firstPage = 1;
    if (currentPage > firstPage) {
      this.validatePagination(firstPage);
      // this.props.pagination(firstPage);
    }
  };

  prevPage = () => {
    const currentPage = this.props.number;
    let prevPage = 1;

    if (currentPage > prevPage) {
      this.validatePagination(currentPage - prevPage);
      // this.props.pagination(currentPage - prevPage);
    }
  };

  lastPage = () => {
    const itemsCountPerPage = this.props.size;
    const totalElements = this.props.totalElements;
    const currentPage = this.props.number;
    let condition = Math.ceil(totalElements / itemsCountPerPage);
    if (currentPage < condition) {
      this.validatePagination(condition);
      // this.props.pagination(condition);
    }
  };

  nextPage = () => {
    const itemsCountPerPage = this.props.size;
    const totalElements = this.props.totalElements;
    const currentPage = this.props.number;
    if (currentPage < Math.ceil(totalElements / itemsCountPerPage)) {
      // this.props.pagination(currentPage + 1);
      this.validatePagination(currentPage + 1);
    }
  };

  /* FIN */
  DateFiling = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };

  colorStatusFiling = (state) => {
    let status;
    if (state === "APROBADA") {
      status = <b style={{ color: "#39a84e" }}>{state}</b>;
    } else if (state === "INICIADO") {
      status = <b style={{ color: "#d6d914" }}>{state}</b>;
    } else if (state === "POR ADJUNTAR") {
      status = <b style={{ color: "#d91427" }}>{state}</b>;
    } else {
      return state;
    }
    return status;
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

    const aux = Object.keys(data).length ? "Datos" : "No datos";

    const pageNumCss = {
      width: "45px",
      boder: "1px solid #17A2B8",
      color: "#17A2B8",
      textAling: "center",
      fontWeight: "bold",
    };

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
              {/* <div className="col-md-5">
                <ReactPaginate
                  pageCount={totalPages}
                  pageRangeDisplayed={number}
                  marginPagesDisplayed={totalElements}
                  onPageChange={this.handlePageClick}
                />
              </div> */}
              {/* <div className="float-left">
              Showing Page {currentPage} of {totalPages}
              </div> */}
              <div className="float-right">
                Showing Page {number} of {totalPages}
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
                    type="number"
                    // Validar que no entre en NaN
                    min={1}
                    max={totalPages}
                    style={pageNumCss}
                    className="bg-dark"
                    name="currentPage"
                    // value={number}
                    defaultValue={number + 1}
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
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" style={{ padding: 0 }}>
                <div className="table">
                  <table className="table table-hover table-sm table-condensed">
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
                        <th style={{ width: "150px" }}>Sede</th>
                        <th style={{ width: "10px" }}>No.Radicación</th>
                        <th style={{ width: "150px" }}>Asunto</th>
                        <th style={{ width: "100px" }}>Fecha de radicación</th>
                        <th style={{ width: "50px" }}>Destinatarios</th>
                        <th style={{ width: "10px" }}>Estado</th>
                        <th style={{ width: "100px" }}>Acciones</th>
                      </tr>
                    </thead>
                    {allcontent.length ? (
                      <tbody
                        className="text-center"
                        style={{
                          height: "200px",
                          overflowY: "auto",
                          width: "100%",
                        }}
                      >
                        {allcontent.map((correspondence, id) => {
                          return (
                            <tr key={id}>
                              <td className="inbox-small-cells">
                                <input
                                  name="foo"
                                  type="checkbox"
                                  className="mail-checkbox"
                                  defaultChecked={this.state.chkrow}
                                  onChange={(e) => {
                                    this.setState({ chkrow: e.target.value });
                                    // this.setState({ chkrow: !this.state.chkrow });
                                  }}
                                />
                              </td>
                              <td>{correspondence.headquarter}</td>
                              <td>{correspondence.numFiling}</td>
                              <td>{correspondence.issue}</td>
                              <td>
                                {this.DateFiling(correspondence.createdAt)}
                              </td>
                              <td>{correspondence.guide}</td>
                              <td>
                                {this.colorStatusFiling(
                                  correspondence.statusName
                                )}
                              </td>
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
    paginationReceived(page) {
      dispatch(loadPaginationReceived(page));
    },
    paginationPending(page) {
      dispatch(loadPaginationPending(page));
    },
  };
};

export default connect(mapState, mapDispatch)(ContentComponent);
