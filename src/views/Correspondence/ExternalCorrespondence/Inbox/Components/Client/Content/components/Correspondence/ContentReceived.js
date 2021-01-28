import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputSearch from "./../../InputSearch";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import moment from "moment";
import ModalCreateAnottation from "./../../../../../../Annotations/component/ModalCreateAnottation";

class ContentReceived extends Component {
  constructor(props) {
    super();
    this.state = {
      modalview: false,
      id: "",
    };
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

  disabledInput = () => {
    const { number, totalPages } = this.props;
    let disabled = false;
    if (number === totalPages) {
      disabled = true;
    }
    return disabled;
  };

  viewcorrespondence = (id) => {
    const path = `/#/correspondence/external/view/${id}`;
    window.location.replace(path);
  };

  openModalNew(id) {
    this.ModalNewAnottation.toggle(id);
    console.log(id);
  }

  render() {
    console.log(this.props);
    const { allcontent, number, totalPages } = this.props;
    const currentPage = this.props.number;
    const pageNumCss = {
      width: "45px",
      boder: "1px solid #17A2B8",
      color: "#17A2B8",
      textAling: "center",
      fontWeight: "bold",
    };
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-7" style={{ padding: 0, marginTop: "20px" }}>
            <div className="form-group">
              {" "}
              <InputSearch />
            </div>
          </div>
          <div className=" col-md-5 float-right">
            <center>
              Página <b>{number}</b> de <b>{totalPages}</b>{" "}
            </center>
            <InputGroup size="sm">
              <InputGroupAddon addonType="prepend">
                <Button
                  className="btn btn-sm btn-light"
                  type="button"
                  variant="outline-info"
                  disabled={currentPage === 1 ? true : false}
                  onClick={this.firstPage}
                >
                  <i
                    style={{ fontWeight: "bold" }}
                    className="fa fa-angle-double-left"
                  />
                </Button>
                <Button
                  className="btn btn-sm btn-light"
                  type="button"
                  variant="outline-info"
                  disabled={currentPage === 1 ? true : false}
                  onClick={this.prevPage}
                >
                  <i className="fa fa-chevron-left" />
                </Button>
              </InputGroupAddon>
              <Input
                // Validar que no entre en NaN
                type="number"
                min={1}
                max={totalPages}
                style={pageNumCss}
                className="bg-light"
                name="currentPage"
                placeholder="Buscar página"
                // value={number}
                // defaultValue={number + 1}
                disabled={this.disabledInput()}
                onChange={this.handlePageChange}
              />

              <InputGroupAddon addonType="append">
                <Button
                  className="btn btn-sm btn-light"
                  type="button"
                  variant="outline-info"
                  disabled={currentPage === totalPages ? true : false}
                  onClick={this.nextPage}
                >
                  <i className="fa fa-chevron-right" />
                </Button>
                <Button
                  className="btn btn-sm btn-light"
                  type="button"
                  variant="outline-info"
                  disabled={currentPage === totalPages ? true : false}
                  onClick={this.lastPage}
                >
                  <i
                    style={{ fontWeight: "bold" }}
                    className="fa fa-angle-double-right"
                  />
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
                              this.toggleCheckboxes(this.state.checkall, "foo")
                          )
                        }
                      />
                    </th>
                    <th style={{ width: "150px" }}>Sede</th>
                    <th style={{ width: "10px" }}>No.Radicación</th>
                    <th style={{ width: "150px" }}>Asunto</th>
                    <th style={{ width: "100px" }}>Fecha de radicación</th>
                    <th style={{ width: "50px" }}>Destinatarios</th>
                    {/* <th style={{ width: "10px" }}>Estado</th> */}
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
                          <td>{this.DateFiling(correspondence.createdAt)}</td>
                          <td>{correspondence.guide}</td>
                          {/* <td>
                            {this.colorStatusFiling(correspondence.statusName)}
                          </td> */}
                          <td>
                            <div className="">
                              <button
                                title="Ver correspondencia"
                                type="button"
                                className="btn btn-secondary btn-sm"
                                onClick={() =>
                                  this.viewcorrespondence(correspondence.id)
                                }
                              >
                                <i className="fa fa-eye" />
                              </button>
                              &nbsp;
                              <button
                                className="btn btn-secondary btn-sm"
                                title="agregar anotacion"
                                onClick={(id) => {
                                  this.openModalNew(correspondence.id);
                                  this.setState({ id: correspondence.id });
                                }}
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
                      <td colSpan={8}>
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
        <ModalCreateAnottation
          id={this.state.id}
          modalnewanottation={this.state.modalview}
          ref={(mo) => (this.ModalNewAnottation = mo)}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
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

const mapDispatchTopProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchTopProps)(ContentReceived);
