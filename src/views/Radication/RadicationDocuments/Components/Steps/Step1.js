import React, { Component } from "react";
import PropTypes from "prop-types";
import CardInformation from "./../AuxiliaryComponents/Cardinformation";

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedDestinatario: 0
    };
  }

  GetUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  };

  componentDidMount() {
    this.GetUsers();
  }

  render() {
    const aux = this.state.users.map((obj, idx) => {
      return (
        <option value={obj.id}>
          {obj.name} - {obj.username} - {obj.id}
        </option>
      );
    });
    const selectdestinatario = this.state.selectedDestinatario;
    console.log(selectdestinatario);
    return (
      <div className="animated fadeIn">
        <div className="">
          <div className="col-md-10 offset-1">
            <form className="form">
              <div className="card">
                <div className="p-2 mb-1 bg-secondary text-dark">
                  Información básica
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-2 offset-1 ">
                          <div className="form-group text-center">
                            <label className="">
                              <strong> Fecha de radicacion</strong>{" "}
                            </label>
                            <dd className="">04/10/2018</dd>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group text-center">
                            <label>
                              {" "}
                              <strong>Hora de radicacion</strong>{" "}
                            </label>
                            <dd> 09:57 AM </dd>
                          </div>
                        </div>
                        <div className="col-md-2 ">
                          <div className="form-group text-center">
                            <label>
                              {" "}
                              <strong>Sede</strong>{" "}
                            </label>
                            <dd> Sede 1 </dd>
                          </div>
                        </div>
                        <div className="col-md-2  ">
                          <div className="form-group text-center">
                            <label>
                              {" "}
                              <strong>Vigenica</strong>{" "}
                            </label>
                            <dd> 2018 </dd>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group text-center">
                            <label>
                              {" "}
                              <strong>Usuario radicador</strong>{" "}
                            </label>
                            <dd> Carmen Rojas </dd>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <hr />
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>
                              Tipo de documento{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select className="form-control form-control-sm">
                              <option>Seleccione...</option>
                              <option>Cuenta de cobro</option>
                              <option>Cuenta de leasing</option>
                              <option>Factura administrativa</option>
                              <option>Factura de PME</option>
                              <option>Factura de cadena</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>
                              Fecha del documento{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="date"
                              className="form-control form-control-sm"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>
                              Conglomerado{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select className="form-control form-control-sm">
                              <option>Seleccione...</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>
                              Empresa <span className="text-danger">*</span>
                            </label>
                            <select className="form-control form-control-sm">
                              <option>Seleccione...</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>
                              Sede <span className="text-danger">*</span>
                            </label>
                            <select className="form-control form-control-sm">
                              <option>Seleccione...</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>
                              Tipo de envio{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select className="form-control form-control-sm">
                              <option>Seleccione...</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>
                              Asunto <span className="text-danger">*</span>
                            </label>
                            <textarea className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>
                              Observaciones{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <textarea className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>
                              {" "}
                              Folios <span className="text-danger">*</span>{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>
                              {" "}
                              Folios <span className="text-danger">*</span>{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>
                              {" "}
                              Folios <span className="text-danger">*</span>{" "}
                            </label>
                            <select className="form-control form-control-sm">
                              <option>Seleccione...</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="p-2 mb-1 bg-secondary text-dark">
                  Enviado por
                </div>
                <div className="col-md-12">
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
                        <label>Buscar remitente</label>
                        <select className="form-control form-control-sm">
                          <option>Seleccione...</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Remitente que firma</label>
                        <select className="form-control form-control-sm">
                          <option>Seleccione...</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="p-2 mb-1 bg-secondary text-dark">
                  Destinatarios externos
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>
                          {" "}
                          Buscar destinatario externo{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control form-contro-sm"
                          onChange={e => {
                            this.setState({
                              selectedDestinatario: e.target.value
                            });
                          }}
                          value={this.state.selectedDestinatario}
                        >
                          <option value="0" defaultValue="0">
                            --Seleccione--
                          </option>
                          {aux}
                        </select>
                        <br />
                        <p>Probnado apenas</p>
                        <CardInformation
                          selectedItem={this.state.selectedDestinatario}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Step1.propTypes = {};

export default Step1;
