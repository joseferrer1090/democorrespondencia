import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderBox from "./../../../Header/HeaderInbox";
import SideBar from "./../../../Sidebar/SidebarInboxComponent";
import { Card, CardHeader, CardBody, CardFooter, Collapse } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "./../../../../../../../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

const data = [
  {
    id: 1,
    tipo: "documento",
    sede: "SEDE 1",
    consecutivo: "372",
    asunto:
      "jose a new class: Login Class Fast Site asdasda asdasd asdasd asasd ",
    fecha_documento: "03/10/2018",
    destinatarios: [
      {
        id: 1,
        name_destinatario: "DESTINATARIO"
      }
    ],
    estado: "read"
  },
  {
    id: 2,
    tipo: "tramite",
    sede: "SEDE 3",
    consecutivo: "375",
    asunto:
      "Added a new class: Login Class Fast Site asdasda asdasd asdasd asasd ",
    fecha_documento: "03/10/2018",
    destinatarios: [
      {
        id: 1,
        name_destinatario: "DESTINATARIO"
      }
    ],
    estado: "new"
  },
  {
    id: 3,
    tipo: "documento",
    sede: "SEDE 1",
    consecutivo: "376",
    asunto:
      "Added a new class: Login Class Fast Site asdasda asdasd asdasd asasd ",
    fecha_documento: "03/10/2018",
    destinatarios: [
      {
        id: 1,
        name_destinatario: "DESTINATARIO"
      },
      {
        id: 2,
        name_destinatario: "DESTINATARIO 2"
      }
    ],
    estado: "out of time"
  }
];

class FilterCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse1: true,
      collapse2: false,
      collapse3: false,
      collapse4: false
    };
  }

  toggleCollapse1 = () => {
    this.setState(state => ({ collapse1: !state.collapse1 }));
  };

  toggleCollapse2 = () => {
    this.setState(state => ({ collapse2: !state.collapse2 }));
  };

  toogleCollapse3 = () => {
    this.setState(state => ({ collapse3: !state.collapse3 }));
  };

  toogleCollapse4 = () => {
    this.setState(state => ({ collapse4: !state.collapse4 }));
  };

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
                        <a
                          onClick={e => {
                            e.preventDefault();
                            this.toggleCollapse1();
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {" "}
                          Consulta de correspondencia recibida
                        </a>
                      </CardHeader>
                      <Collapse isOpen={this.state.collapse1}>
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
                      </Collapse>
                    </Card>
                    <Card>
                      <CardHeader>
                        <a
                          onClick={e => {
                            e.preventDefault();
                            this.toggleCollapse2();
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Remitente
                        </a>
                      </CardHeader>
                      <Collapse isOpen={this.state.collapse2}>
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
                      </Collapse>
                    </Card>
                    <Card>
                      <CardHeader>
                        <a
                          onClick={e => {
                            e.preventDefault();
                            this.toogleCollapse3();
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Destinatarios
                        </a>
                      </CardHeader>
                      <Collapse isOpen={this.state.collapse3}>
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
                      </Collapse>
                    </Card>
                    <Card>
                      <CardHeader>
                        <a
                          onClick={e => {
                            e.preventDefault();
                            this.toogleCollapse4();
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          Campos adicionales
                        </a>
                      </CardHeader>
                      <Collapse isOpen={this.state.collapse4}>
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
                      </Collapse>
                    </Card>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive">
                          <BootstrapTable
                            data={data}
                            className="table table-sm table-hover"
                            bordered={false}
                          >
                            <TableHeaderColumn
                              isKey
                              dataField={"id"}
                              width={"20"}
                            >
                              diga id
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={"tipo"} width={"80"}>
                              {" "}
                              Tipo
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={"sede"} width={"50"}>
                              Sede
                            </TableHeaderColumn>
                            <TableHeaderColumn
                              dataField={"consecutivo"}
                              width={"80"}
                            >
                              {" "}
                              Consecutivo
                            </TableHeaderColumn>
                            <TableHeaderColumn
                              dataField={"asunto"}
                              width={"320"}
                            >
                              {" "}
                              Asunto{" "}
                            </TableHeaderColumn>
                            <TableHeaderColumn
                              dataField={"fecha_documento"}
                              width={"170"}
                            >
                              Fecha del documento{" "}
                            </TableHeaderColumn>
                            <TableHeaderColumn
                              width={"180"}
                              dataField={"destinatarios"}
                            >
                              {" "}
                              Destinatarios{" "}
                            </TableHeaderColumn>
                          </BootstrapTable>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <hr />
                        <div className="float-right">
                          <button className="btn btn-secondary btn-sm">
                            <i className="fa fa-search" /> Consultar
                          </button>
                          &nbsp;
                          <button className="btn btn-secondary btn-sm">
                            {" "}
                            <i className="fa fa-times" /> Cerrar{" "}
                          </button>
                        </div>
                      </div>
                    </div>
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
