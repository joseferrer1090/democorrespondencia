import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderBox from "./../../../Header/HeaderInbox";
import SideBar from "./../../../Sidebar/SidebarInboxComponent";
import { Card, CardHeader, CardBody, CardFooter, Collapse } from "reactstrap";

class FilterCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  }

  render() {
    return (
      <div className="">
        <HeaderBox />
        <div>
          <div className="col-md-12">
            <div
              style={{
                minHeight: "600px",
                marginTop: "0px"
              }}
            >
              <div className="row">
                <SideBar />
                <div className="col-md-10" style={{ padding: "0px" }}>
                  <Card body>
                    <div>
                      <h3 className="card-title">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          onClick={() => {
                            this.props.history.goBack();
                          }}
                          title="atras"
                        >
                          {" "}
                          <i className="fa fa-arrow-left" />{" "}
                        </button>{" "}
                        Consulta de correspondencias recibidas
                        <div className="float-right">
                          <div
                            className="btn-group btn-group-sm"
                            role="group"
                            aria-label="..."
                          >
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              title="Buscar"
                              onClick={() => {
                                alert("probando");
                              }}
                            >
                              <i className="fa fa-search" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              title="cancelar"
                            >
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </div>
                      </h3>
                    </div>
                    <hr style={{ marginTop: "0px" }} />
                    <Card>
                      <CardHeader>
                        Consulta de correspondencia recibida
                      </CardHeader>
                      <CardBody>
                        <form>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Fecha de radicacion</label>
                                <input
                                  type="date"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Fecha de radicacion hasta</label>
                                <input
                                  type="date"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Fecha del documento desde</label>
                                <input
                                  type="date"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Fecha del documento hasta</label>
                                <input
                                  type="date"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <hr />
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Consecutivo desde</label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Consecutivo hasta</label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Cantidad de imagenes desde</label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Cantidad de imagenes hasta </label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <hr />
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Tipo de documento </label>
                                <select className="form-control form-control-sm">
                                  <option>Todos</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Sede </label>
                                <select className="form-control form-control-sm">
                                  <option>Todas</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Ciudad </label>
                                <select className="form-control form-control-sm">
                                  <option>Seleccione</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Vigencia </label>
                                <select className="form-control form-control-sm">
                                  <option>Todas</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <hr />
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Tipo de llegada </label>
                                <select className="form-control form-control-sm">
                                  <option>Todos</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Guía </label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Folios </label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label>Usuario radicador </label>
                                <select className="form-control form-control-sm">
                                  <option>Todos</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <hr />
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Estado de la correspondencia</label>
                                <select className="form-control form-control-sm">
                                  <option>Todos</option>
                                  <option>Respondida</option>
                                  <option>No respondida</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Asunto</label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Nro. del documento</label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader> Remitente </CardHeader>
                      <CardBody>
                        <form>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Identificación</label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label> Nombre </label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader>Destinatarios</CardHeader>
                      <CardBody>
                        <form>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Conglomerado</label>
                                <select className="form-control form-control-sm">
                                  <option>Seleccione...</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Empresa</label>
                                <select className="form-control form-control-sm">
                                  <option>Seleccione...</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Sede</label>
                                <select className="form-control form-control-sm">
                                  <option>Seleccione...</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Dependencia</label>
                                <select className="form-control form-control-sm">
                                  <option>Seleccione...</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Buscar destinantario</label>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label>Originalidad</label>
                                <select className="form-control form-control-sm">
                                  <option>Copia</option>
                                  <option>Original</option>
                                  <option>Todos</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Destinatarios disponibles</label>
                                <textarea className="form-control" disabled />
                              </div>
                            </div>
                          </div>
                        </form>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader>Campos adicionales</CardHeader>
                      <CardBody>
                        <form>
                          <row>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Plantilla</label>
                                <select className="form-control form-control-sm">
                                  <option>Todos</option>
                                  <option>Ninguna</option>
                                  <option>Plantilla</option>
                                </select>
                              </div>
                            </div>
                          </row>
                        </form>
                      </CardBody>
                    </Card>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FilterCorrespondence.propTypes = {};

export default FilterCorrespondence;
