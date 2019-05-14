import React, { Component } from "react";
import PropTypes from "prop-types";
import { Collapse } from "reactstrap";
import CardRemitente from "./AuxiliaryComponents/Cardinformation";

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      collapse2: false,
      data: [],
      selectRemitente: 0
    };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  toogle2() {
    this.setState(state => ({ collapse2: !state.collapse2 }));
  }

  getDatauser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        });
        console.log(this.state.data);
      })
      .catch(err => {
        console.log("Error", err);
      });
  };

  componentDidMount() {
    this.getDatauser();
  }

  render() {
    const aux = this.state.data.map((obj, idx) => {
      return (
        <option value={obj.id}>
          {obj.name} - {obj.username} - {obj.id}
        </option>
      );
    });
    const id = this.state.selectRemitente;
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
                        <div className="col-md-2 offset-1">
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
                  </div>
                  <div className="col-md-12">
                    <hr />
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label> Conglomerado</label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label> Empresa </label>
                          <select className="form-control form-control-sm">
                            <option> Seleccione... </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Sede</label>
                          <select className="form-control form-control-sm">
                            <option> Seleccione.... </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            Tipo de documento{" "}
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
                            Nro. del documento{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Pais</label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Departamento</label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            Ciudad <span className="text-danger">*</span>
                          </label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            Tipo de llegada{" "}
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
                            Guia <span className="text-danger">*</span>
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
                            Folios <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>
                            Asunto <span className="text-danger">*</span>
                          </label>
                          <textarea className="form-control form-control-sm" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Mensajero <span className="text-danger">*</span>
                          </label>
                          <select className="form-control form-control-sm">
                            <option> Seleccione... </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="p-2 mb-1 bg-secondary text-dark">
                  Respuesta a correspondencia despachada
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Conglomerado</label>
                        <select className="form-control">
                          <option>Seleccione.</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Empresa</label>
                        <select className="form-control">
                          <option>Seleccione.</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Sede</label>
                        <select className="form-control">
                          <option>Seleccione.</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label> Vigencia </label>
                        <select className="form-control  form-control-sm">
                          <option>Seleccione...</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form-group">
                        <label> Consecutivo</label>
                        <div className="input-group input-group-sm mb-3">
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-secondary"
                              type="button"
                              id="button-addon2"
                              onClick={() => this.toggle()}
                            >
                              <i className="fa fa-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <Collapse isOpen={this.state.collapse}>
                        <div className="card">
                          <div className="p-2 mb-1 bg-secondary text-dark">
                            Correspondencia despachada
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-5">
                                <div className="form-group">
                                  <label>Criterio</label>
                                  <select className="form-control form-control-sm">
                                    <option>Seleccione...</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <label> Consecutivo</label>
                                  <div className="input-group input-group-sm mb-3">
                                    <input
                                      type="text"
                                      className="form-control"
                                      aria-label="Sizing example input"
                                      aria-describedby="inputGroup-sizing-sm"
                                    />
                                    <div className="input-group-prepend">
                                      <button
                                        className="btn btn-secondary"
                                        type="button"
                                        id="button-addon2"
                                        onClick={() => this.toogle2()}
                                      >
                                        <i className="fa fa-search" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <Collapse isOpen={this.state.collapse2}>
                                  <table className="table table-sm border table-hover">
                                    <thead>
                                      <tr className="text-center">
                                        <th>Sede</th>
                                        <th>Vigencia</th>
                                        <th>Consecutivo</th>
                                        <th>Asunto</th>
                                        <th>Acciones</th>
                                      </tr>
                                    </thead>
                                    <tbody className="text-center">
                                      <tr>
                                        <td>Bogota centro de logistica</td>
                                        <td>2019</td>
                                        <td>223</td>
                                        <td>31919</td>
                                        <td>
                                          <button
                                            type="button"
                                            className="btn btn-secondary btn-sm"
                                          >
                                            <i className="fa fa-eye" />
                                          </button>
                                          &nbsp;
                                          <button
                                            type="button"
                                            className="btn btn-secondary btn-sm"
                                          >
                                            <i className="fa fa-plus" />
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Bogota principal</td>
                                        <td>2019</td>
                                        <td>339</td>
                                        <td>8820047687</td>
                                        <td>
                                          <button
                                            type="button"
                                            className="btn btn-secondary btn-sm"
                                          >
                                            <i className="fa fa-eye" />
                                          </button>
                                          &nbsp;
                                          <button
                                            type="button"
                                            className="btn btn-secondary btn-sm"
                                          >
                                            <i className="fa fa-plus" />
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Bogota principal</td>
                                        <td>2019</td>
                                        <td>216</td>
                                        <td>BLA-4700001056</td>
                                        <td>
                                          <button
                                            type="button"
                                            className="btn btn-secondary btn-sm"
                                          >
                                            <i className="fa fa-eye" />
                                          </button>
                                          &nbsp;
                                          <button
                                            type="button"
                                            className="btn btn-secondary btn-sm"
                                          >
                                            <i className="fa fa-plus" />
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </Collapse>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="p-2 mb-1 bg-secondary text-dark">Remitente</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Buscar remitente{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control form-control-sm"
                          value={this.state.selectRemitente}
                          onChange={e => {
                            this.setState({ selectRemitente: e.target.value });
                          }}
                        >
                          <option value="0" defaultValue="0">
                            --Seleccione--
                          </option>
                          {aux}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <CardRemitente
                        selectedItem={this.state.selectRemitente}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="p-2 mb-1 bg-secondary text-dark">
                  Busqueda de destinatarios
                </div>
                <div className="card-body">
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
                        <label>Grupo</label>
                        <select className="form-control form-control-sm">
                          <option>Seleccione...</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Buscar destinatario</label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-secondary"
                              type="button"
                              id="button-addon2"
                            >
                              <i className="fa fa-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Destinatarios disponibles</label>
                        <textarea
                          className="form-control from-control-sm"
                          disabled
                          readOnly
                          rows={5}
                        />
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="defaultCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck1"
                        >
                          Original
                        </label>
                        <button className="btn btn-secondary btn-sm float-right">
                          Todos <i className="fa fa-angle-double-right" />{" "}
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Destinatarios asignados{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control form-control-sm"
                          readOnly
                          disabled
                          rows={6}
                        />
                      </div>
                      <button className="btn btn-secondary btn-sm float-right">
                        <i className="fa fa-angle-double-left" /> Todos{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="p-2 mb-1 bg-secondary text-dark">
                  Campo adicionales
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="form-group">
                        <label>Plantilla</label>
                        <select className="form-control form-control-sm">
                          <option>Seleccione...</option>
                        </select>
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

export default Step1;
