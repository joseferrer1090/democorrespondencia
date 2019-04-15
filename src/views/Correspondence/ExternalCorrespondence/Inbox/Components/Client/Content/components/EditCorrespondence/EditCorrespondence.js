import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderInbox from "./../../../Header/HeaderInbox";
import SideBarInbox from "./../../../Sidebar/SidebarInboxComponent";
import { Card, Collapse } from "reactstrap";

class EditCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  }

  OpenCollapse = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  render() {
    return (
      <div>
        <HeaderInbox />
        <div>
          <div className="col-md-12">
            <div
              style={{
                minHeight: "600px",
                marginTop: "0px"
              }}
            >
              <div className="row">
                <SideBarInbox />
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
                        Modificar correspondencia recibida - Titulo de
                        correspondencia
                        <div className="float-right">
                          <div
                            className="btn-group btn-group-sm"
                            role="group"
                            aria-label="..."
                          >
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              title="Adjuntar"
                              onClick={() => {
                                this.OpenCollapse();
                              }}
                            >
                              <i className="fa fa-upload" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              title="Cancelar"
                            >
                              <i className="fa fa-times" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              title="Guardar cambios"
                            >
                              <i className="fa fa-floppy-o" />
                            </button>
                          </div>
                        </div>
                      </h3>
                    </div>
                    <hr style={{ marginTop: "0px" }} />
                    <form>
                      <div className="card card-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group">
                              <dt> Fecha de radicación </dt>
                              <dd> Probando </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <dt>Hora de radicación </dt>
                              <dd> Probando </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <dt> Sede </dt>
                              <dd> Probando </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <dt> Vigencia </dt>
                              <dd>Probando</dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <dt> Consecutivo </dt>
                              <dd> Probando </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <dt> Usario radicador </dt>
                              <dd> Probando </dd>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <Card body>
                      <form>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group">
                              <dt>
                                Tipo documental{" "}
                                <span className="text-danger">*</span>
                              </dt>
                              <dd>
                                <select className="form-control form-control-sm">
                                  <option>Seleccione</option>
                                </select>
                              </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <dt>
                                Fecha del documento{" "}
                                <span className="text-danger">*</span>{" "}
                              </dt>
                              <dd>
                                <input
                                  type="date"
                                  className="form-control form-control-sm"
                                />
                              </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <dt>
                                Nro. del documento{" "}
                                <span className="text-danger">*</span>
                              </dt>
                              <dd>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                />
                              </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <dt>
                                Ciudad <span className="text-danger">*</span>
                              </dt>
                              <dd>
                                <select className="form-control form-control-sm">
                                  <option>Seleccione</option>
                                </select>
                              </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <dt>
                                Tipo de llegada{" "}
                                <span className="text-danger">*</span>
                              </dt>
                              <dd>
                                <select className="form-control form-control-sm">
                                  <option>Seleccione</option>
                                </select>
                              </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <dt>
                                Guía <span className="text-danger">*</span>
                              </dt>
                              <dd>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                />
                              </dd>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <dt>
                                Asunto <span className="text-danger">*</span>
                              </dt>
                              <dd>
                                <textarea className="form-control form-control-sm" />
                              </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <dt>
                                Folios <span className="text-danger">*</span>
                              </dt>
                              <dd>
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                />
                              </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <dt>Mensajero</dt>
                              <dt>
                                <select className="form-control form-control-sm">
                                  <option>Seleccione</option>
                                </select>
                              </dt>
                            </div>
                          </div>
                        </div>
                      </form>
                    </Card>
                    <Collapse isOpen={this.state.collapse}>
                      <Card body>
                        <p>Probando apenas</p>
                      </Card>
                    </Collapse>
                    <div className="row">
                      <div className="col-md-6">
                        <Card body>
                          <p>Remitente</p>
                        </Card>
                      </div>
                      <div className="col-md-6">
                        <Card body>
                          <p>Busqueda de destinatario</p>
                        </Card>
                      </div>
                    </div>
                    <Card body>
                      <p>Asignación de destinatario</p>
                    </Card>
                    <Card body>
                      <p>Campos adiconales</p>
                    </Card>
                    <hr />
                    <div className="">
                      <div className="">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                        >
                          {" "}
                          <i className="fa fa-times" /> Cerrar{" "}
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm float-right"
                        >
                          {" "}
                          <i className="fa fa-floppy-o" /> Guardar cambios
                        </button>
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

EditCorrespondence.propTypes = {};

export default EditCorrespondence;
