import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import ViewPdf from "./Forms/ComponentsStep4/ViewPdf";

class Step4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  DateFiling = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };

  DataTableAddressed = (data) => {
    let valueOriginal = "";
    let dataUserAddresses;
    const originalRender = (bool) => {
      if (bool === true) {
        valueOriginal = <span className="badge badge-success">Si</span>;
      } else if (bool === false) {
        valueOriginal = "No";
      }
      return valueOriginal;
    };
    if (data !== undefined) {
      dataUserAddresses = data.map((aux, idx) => {
        return (
          <tr>
            <td>{aux.name}</td>
            <td>{aux.dependence}</td>
            <td>{originalRender(aux.original)}</td>
          </tr>
        );
      });
    }

    return dataUserAddresses;
  };

  DataTableMetadatos = (data) => {
    let tableMetadatos;
    if (data !== undefined) {
      tableMetadatos = data.map((aux, idx) => {
        return (
          <tr>
            <td>{aux.name}</td>
            <td>{aux.value}</td>
          </tr>
        );
      });
    }

    return tableMetadatos;
  };

  render() {
    const { dataFiling } = this.props;
    let headquarter,
      city,
      messenger,
      template,
      thirdPartyr = {
        address: "",
        cell_phone: "",
        city: "",
        email: "",
        identification: "",
        landline: "",
        name: " ",
        observation: "",
        reference: "",
      },
      attached = {
        fileName: "",
        filenameOriginal: "",
        id: "",
        size: "",
      },
      typeDocumentary,
      typeShipmentArrival,
      userFiling = "";

    if (Object.keys(dataFiling).length !== 0) {
      city = dataFiling.city.name;
      headquarter = dataFiling.headquarter.name;
      messenger = dataFiling.messenger.name;
      template = dataFiling.template.name;
      thirdPartyr.address = dataFiling.thirdPartyr.address;
      thirdPartyr.cell_phone = dataFiling.thirdPartyr.cell_phone;
      thirdPartyr.city = dataFiling.thirdPartyr.city;
      thirdPartyr.email = dataFiling.thirdPartyr.email;
      thirdPartyr.identification = dataFiling.thirdPartyr.identification;
      thirdPartyr.landline = dataFiling.thirdPartyr.landline;
      thirdPartyr.name = dataFiling.thirdPartyr.name;
      thirdPartyr.observation = dataFiling.thirdPartyr.observation;
      thirdPartyr.reference = dataFiling.thirdPartyr.reference;
      typeDocumentary = dataFiling.typeDocumentary.name;
      typeShipmentArrival = dataFiling.typeShipmentArrival.name;
      userFiling = dataFiling.userFiling.name;
      attached.fileName = dataFiling.attached.fileName;
      attached.filenameOriginal = dataFiling.attached.filenameOriginal;
      attached.id = dataFiling.attached.id;
      attached.size = dataFiling.attached.size;
    }
    console.log(dataFiling.userAddresses);
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12 text-center">
            <h4>
              Número de radicación:{" "}
              <span className="badge badge-warning">
                {dataFiling.num_filing}
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
                      <dd className="">
                        {this.DateFiling(dataFiling.date_filing)}
                      </dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Hora de radicación</strong>
                      </label>
                      <dd> {dataFiling.time_filing}</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Sede</strong>
                      </label>
                      <dd>{headquarter}</dd>
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
                      <dd> {dataFiling.validity}</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Usuario radicador</strong>
                      </label>
                      <dd>{userFiling}</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Tipo de documento</strong>
                      </label>
                      <dd>{typeDocumentary} </dd>
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
                      <dd> {this.DateFiling(dataFiling.documentDate)}</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Nro. del documento</strong>
                      </label>
                      <dd>{dataFiling.documentNumber}</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong> Ciudad </strong>
                      </label>
                      <dd> {city} </dd>
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
                      <dd className="text-justify">{dataFiling.issue}</dd>
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
                      <dd>{typeShipmentArrival}</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Folios</strong>
                      </label>
                      <dd>{dataFiling.numFolios}</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <strong>Imágenes</strong>
                    </div>
                    <dd>{dataFiling.numImages}</dd>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Mensajero</strong>
                      </label>
                      <dd>{messenger}</dd>
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
                      <dd>{thirdPartyr.identification}</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Nombre</strong>
                      </label>
                      <dd>{thirdPartyr.name}</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Observación</strong>
                      </label>
                      <dd> {thirdPartyr.observation}</dd>
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
                      <dd>{thirdPartyr.address}</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong> Telefóno fijo</strong>
                      </label>
                      <dd> {thirdPartyr.landline} </dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong> Telefóno celular </strong>
                      </label>
                      <dd>{thirdPartyr.cell_phone}</dd>
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
                      <dd>{thirdPartyr.city}</dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Correo electrónico</strong>
                      </label>
                      <dd> {thirdPartyr.email} </dd>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        <strong>Referencia</strong>
                      </label>
                      <dd>{thirdPartyr.reference}</dd>
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
                          <th scope="col">
                            <strong>Original</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.DataTableAddressed(dataFiling.usersAddresses)}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="p-2 mb-1 bg-secondary text-black">
                {" "}
                Campos adiciones{" "}
              </div>
              <div className="card-body">
                <div>
                  <span style={{ fontSize: "15px" }}>
                    {" "}
                    <i className="fa fa-info-circle" /> Metadatos asociados a la
                    plantilla <b>{template}</b>
                  </span>
                </div>
                <br />
                <table className="table table-sm">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Campo</th>
                      <th scope="col">Valor</th>
                    </tr>
                  </thead>
                  <tbody>{this.DataTableMetadatos(dataFiling.metadata)}</tbody>
                </table>
              </div>
            </div>
            <div
              className="card"
              // style={{ height: "600px", padding: "0px" }}
            >
              <div className="p-2 mb-1 bg-secondary text-black">
                {" "}
                Documento adjunto
              </div>
              <div className="card-body">
                <ViewPdf id={attached.id} filename={attached.fileName} />
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
