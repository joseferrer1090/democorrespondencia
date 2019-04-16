import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderInbox from "./../../../Header/HeaderInbox";
import SideBarInbox from "./../../../Sidebar/SidebarInboxComponent";
import { Card, Collapse } from "reactstrap";
import CardRemitente from "./components/CardUserRemitente";

class EditCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      collapse2: false,
      collapse3: true,
      getdata: [],
      selectRemitente: "0"
    };
  }

  OpenCollapse = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  OpenCollapse2 = () => {
    this.setState({
      collapse2: !this.state.collapse2
    });
  };

  onChangeRemitente = e => {
    this.setState({
      selectRemitente: e.target.value
    });
  };

  getDataApi = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/`) // peticion + url
      .then(resp => resp.json()) // Promisse => de lo que viene del server => retorna un json
      .then((
        data //
      ) =>
        this.setState({
          getdata: data
        })
      );
  };

  componentDidMount() {
    this.getDataApi();
  }

  render() {
    console.log(this.state.getdata);
    console.log(this.state.selectRemitente);
    const aux = this.state.getdata.map((aux, i) => {
      return (
        <option key={i} value={aux.id}>
          {aux.name}
        </option>
      );
    });
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
                          <form>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <dt>
                                    Buscar remitente{" "}
                                    <span className="text-danger">*</span>
                                  </dt>
                                  <select
                                    className="form-control form-control-sm"
                                    name="selectRemitente"
                                    onChange={e => {
                                      this.setState({
                                        selectRemitente: e.target.value
                                      });
                                    }}
                                    value={this.state.selectRemitente}
                                  >
                                    <option value="0" defaultValue="0">
                                      --Seleccione remitente--
                                    </option>
                                    {aux}
                                  </select>
                                </div>
                                {/* Aqui va el resultado de pasar el props al otro component */}
                                <CardRemitente
                                  collapse={this.state.collapse3}
                                  selectedItem={this.state.selectRemitente}
                                />
                                {/* Fin */}
                              </div>
                            </div>
                          </form>
                        </Card>
                      </div>
                      <div className="col-md-6">
                        <Card body>
                          <p>Busqueda de destinatario</p>
                          <form>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <dt>
                                    Buscar destinatario{" "}
                                    <span className="text-danger">*</span>{" "}
                                    <sub>
                                      <a
                                        href="#"
                                        onClick={e => {
                                          e.preventDefault();
                                          this.OpenCollapse2();
                                        }}
                                      >
                                        filtrar
                                      </a>
                                    </sub>
                                  </dt>
                                  <input
                                    type="text"
                                    className="form-control form-control-sm"
                                  />
                                </div>
                                <Collapse isOpen={this.state.collapse2}>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label>Conglomerado</label>
                                        <select className="form-control form-control-sm">
                                          <option>Seleccione</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label>Empresa</label>
                                        <select className="form-control form-control-sm">
                                          <option>Seleccione</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label>Sede</label>
                                        <select className="form-control form-control-sm">
                                          <option>Seleccione</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label>Dependencia</label>
                                        <select className="form-control form-control-sm">
                                          <option>Seleccione</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <label>Grupo</label>
                                        <select className="form-control form-control-sm">
                                          <option>Seleccione</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </Collapse>
                              </div>
                            </div>
                          </form>
                        </Card>
                      </div>
                    </div>
                    <Card body>
                      <p>Asignacion de destinatarios</p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <dt>Destinatarios disponible</dt>
                            <textarea
                              className="form-control form-control-sm"
                              disabled
                              style={{ height: "100px" }}
                            />
                          </div>
                          <input type="checkbox" checked /> Original
                          <div className="float-right">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                            >
                              Todos <i className="fa fa-angle-double-right" />
                            </button>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <dt>
                              Destinatarios asignados{" "}
                              <span className="text-danger">*</span>
                            </dt>
                            <textarea
                              className="form-control form-control-sm"
                              disabled
                              style={{ height: "100px" }}
                            />
                          </div>
                          <div className="float-right">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                            >
                              <i className="fa fa-angle-double-left" /> Todos
                            </button>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card body>
                      <p>Campos adiconales</p>
                      <form>
                        <div className="row">
                          <div className="col-md-5">
                            <div className="form-group">
                              <dt>
                                Plantilla <span className="text-danger">*</span>
                              </dt>
                              <select className="form-control form-control-sm">
                                <option>Seleccione</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </form>
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
