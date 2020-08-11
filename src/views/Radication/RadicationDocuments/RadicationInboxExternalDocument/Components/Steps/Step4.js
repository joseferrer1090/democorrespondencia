import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Step4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { dataFiling } = this.props;

    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12 text-center">
            <h4>
              Número de radicación:{" "}
              <span className="badge badge-warning">
                {dataFiling.documentNumber}
              </span>{" "}
            </h4>
          </div>
          <div className="col-md-10 offset-1">
            <div className="card">
              <div className="card-header"> Información basica </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 ">
                    <div className="form-group ">
                      <label className="">
                        <strong> Fecha de radicación</strong>{" "}
                      </label>
                      <dd className="">04/10/2018</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Hora de radicación</strong>
                      </label>
                      <dd> 09:57 AM </dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Sede</strong>
                      </label>
                      <dd>Sede I</dd>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Vigencia</strong>
                      </label>
                      <dd> 2019</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Usuario radicador</strong>
                      </label>
                      <dd>Carmen Rojas</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Tipo de documento</strong>
                      </label>
                      <dd>Factura </dd>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Fecha del documento</strong>
                      </label>
                      <dd> 14/02/2019</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Nro. del documento</strong>
                      </label>
                      <dd>147852369</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong> Ciudad </strong>
                      </label>
                      <dd> BOGOTA - DISTRITO CAPITAL </dd>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>
                        <strong>Asunto</strong>
                      </label>
                      <dd className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam sed mattis nulla. Donec posuere ornare
                        fermentum. Phasellus vulputate ultrices fermentum. In
                        eleifend rutrum mauris, et pulvinar arcu pellentesque
                        vitae. Duis vel felis nibh. Aenean feugiat nunc a odio
                        tincidunt volutpat. Integer sodales dui felis, vel
                        feugiat neque iaculis quis. Vestibulum ante ipsum primis
                        in faucibus orci luctus et ultrices posuere cubilia
                        Curae; Duis mattis risus odio, nec interdum metus
                        vulputate sit amet.
                      </dd>
                    </div>
                  </div>
                </div>
                <hr />
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Tipo de llegada</strong>
                      </label>
                      <dd>A la mano</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Folios</strong>
                      </label>
                      <dd>2</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <strong>Imágenes</strong>
                    </div>
                    <dd>2</dd>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Mensajero</strong>
                      </label>
                      <dd>12345,Servientrega</dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">Remitente</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Identificación</strong>
                      </label>
                      <dd>900536113-1</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Nombre</strong>
                      </label>
                      <dd>Demos colombia sas</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Observación</strong>
                      </label>
                      <dd> {/* informacion     */} </dd>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Dirección</strong>
                      </label>
                      <dd>CALLE 93B #16-66 OFICINA 307</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong> Telefóno fijo</strong>
                      </label>
                      <dd> 5306453 </dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong> Telefóno celular </strong>
                      </label>
                      <dd>{/* */}</dd>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Ciudad</strong>
                      </label>
                      <dd>BOGOTA - DISTRITO CAPITAL</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Correo electrónico</strong>
                      </label>
                      <dd> {/* */} </dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Referencia</strong>
                      </label>
                      <dd>{/* */}</dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">Destinatarios asignados</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">
                            <strong>Nombre</strong>
                          </th>
                          <th scope="col">
                            <strong>Dependencia</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Carlos Perez (cperez)</td>
                          <td>Dependencia I</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">Campos adiciones</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">
                            <strong>Campo</strong>
                          </th>
                          <th scope="col">
                            <strong>Valor</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Campo 0</td>
                          <td>Valor 0</td>
                        </tr>
                        <tr>
                          <td>Campo 1</td>
                          <td>Valor 1</td>
                        </tr>
                        <tr>
                          <td>Campo 2</td>
                          <td>Valor 2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Step4.propTypes = {};

function mapStateToProps(state) {
  return {
    dataFiling: state.step3ReducerFiling.data,
  };
}

export default connect(mapStateToProps, null)(Step4);
