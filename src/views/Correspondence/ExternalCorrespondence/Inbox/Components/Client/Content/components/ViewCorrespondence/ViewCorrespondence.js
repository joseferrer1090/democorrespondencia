import React, { Component } from "react";
import HeaderBox from "./../../../Header/HeaderInbox";
import SideBar from "./../../../Sidebar/SidebarInboxComponent";
import { Card, CardHeader, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import ModalAnotations from "./../OtherOption/AnnotationsCorrespondence";
import ModalAddanotation from "./../OtherOption/AddanotationsCorrespondence";
import ModalSticker from "./../ModalStciker/ModalSticker";
import PDFViewer from "./../../../../../../../../../utils/pdfViewer/components/PDFViewer";
import PDFJSBackend from "./../../../../../../../../../utils/pdfViewer/backend/pdfjs";
import "./css/card-custom.css";
import moment from "moment";
import {
  EXTERNAL_CORRESPONDENCE_RECEIVED,
  USER,
} from "../../../../../../../../../services/EndPoints";

const styleHR = {
  marginTop: "0px",
};

const asyncLocalStorage = {
  setItem: async function (key, value) {
    await null;
    return localStorage.setItem(key, value);
  },
  getItem: async function (key) {
    await null;
    return localStorage.getItem(key);
  },
};

class ViewCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalanotation: false,
      modaladdanotation: false,
      modalstikcer: false,
      id: "",
      dataCorrespondencia: {},
      dataCiudad: {},
      dataSede: {},
      dataUserFiling: {},
      dataMessenger: {},
      dataDestinatarios: [],
      dataInfoMetadatos: [],
      dataInfoUser: {},
      dataRemitente: {},
      dataTipoLlegada: {},
      dataTipoDocumental: {},
      dataPlantilla: {},
      dataAttachments: [],
      dataAnnotations: [],
      authToken: "",
    };
    this.myViewer = React.createRef();
  }

  OpenModalAnotation = () => {
    this.refs.child.toggle();
  };

  OpenModalAddanotation = () => {
    this.refs.child2.toggle();
  };

  OpenModalSticker = () => {
    this.refs.child3.toggle();
  };

  componentDidMount() {
    this.getDataLocal();
    this.setState(
      {
        id: this.props.match.params,
      }
      // () => this.getInfoCorrespondencia(this.state.id.id)
    );
  }

  getDataLocal = () => {
    asyncLocalStorage.getItem("auth_token").then((resp) => {
      this.setState(
        {
          authToken: resp,
        },
        () => this.getInfoCorrespondencia(this.state.id.id)
      );
    });
  };

  getInfoCorrespondencia = (id) => {
    const { authToken } = this.state;
    fetch(`${EXTERNAL_CORRESPONDENCE_RECEIVED}/${id}?username=ccuartas`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + authToken,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          dataCorrespondencia: data,
          dataCiudad: data.city,
          dataSede: data.headquarter,
          dataUserFiling: data.userFiling,
          dataMessenger: data.messenger,
          dataDestinatarios: data.usersAddresses,
          dataRemitente: data.userFiling,
          dataTipoLlegada: data.typeShipmentArrival,
          dataTipoDocumental: data.typeDocumentary,
          dataInfoMetadatos: data.metadata,
          dataPlantilla: data.template,
          dataAttachments: data.attachments,
          dataAnnotations: data.annotations,
        });

        this.getInfoUsuario(this.state.dataRemitente.id);
      })
      .catch((Error) => {
        console.log(" ", Error);
      });
  };

  getInfoUsuario = (id) => {
    const { authToken } = this.state;
    fetch(`${USER}/${id}/?username=ccuartas`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + authToken,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataInfoUser: data,
        });
      })
      .catch((Error) => {
        console.log(" ", Error);
      });
  };

  OpenOnClickEdit = () => {
    let id = this.props.match.params.id;
    let path = `/correspondence/external/edit/${id}`;
    this.props.history.push(path);
  };

  OpenOnClickViewRelatedUsers = () => {
    let id = this.props.match.params.id;
    let path = `/correspondence/external/relatedusers/${id}`;
    this.props.history.push(path);
  };

  OpenClickHistorialCorrespondence = () => {
    let id = this.props.match.params.id;
    let path = `/correspondence/external/historial/${id}`;
    this.props.history.push(path);
  };

  renderDate = (date) => {
    let documentDate;
    documentDate = new Date(date);
    return moment(documentDate).format("DD-MM-YYYY");
  };

  render() {
    const {
      dataCorrespondencia,
      dataCiudad,
      dataSede,
      dataUserFiling,
      dataMessenger,
      dataDestinatarios,
      dataInfoUser,
      dataTipoLlegada,
      dataTipoDocumental,
      dataInfoMetadatos,
      dataPlantilla,
      dataAttachments,
      dataAnnotations,
    } = this.state;

    const urlViewFile = () => {
      let url;
      dataAttachments.map((aux, idx) => {
        url = `http://localhost:8090/api/sgdea/service/external/correspondence/received/filing/attached/view/file/${aux.id}/${aux.fileName}`;
      });
      return url;
    };

    const dataTableDestinatarios = () => {
      let tableDestinatarios;
      tableDestinatarios = dataDestinatarios.map((aux, idx) => {
        return (
          <tr>
            <td>{aux.name}</td>
            <td>{aux.dependence}</td>
          </tr>
        );
      });
      return tableDestinatarios;
    };

    const dataTableMetadatos = () => {
      let tableMetadatos;
      tableMetadatos = dataInfoMetadatos.map((aux, idx) => {
        return (
          <tr>
            <td>{aux.name}</td>
            <td>{aux.value}</td>
          </tr>
        );
      });
      return tableMetadatos;
    };

    const dataTableAnnotations = () => {
      let tableAnnotations;
      if (dataAnnotations.length > 0) {
        tableAnnotations = dataAnnotations.map((aux, idx) => {
          return (
            <tr>
              <td>{this.renderDate(aux.createdAt)}</td>
              <td>{aux.annotation}</td>
            </tr>
          );
        });
      } else {
        tableAnnotations = (
          <tr>
            <td colSpan={8}>
              <div className="jumbotron">
                <h6 className="text-center">No hay datos</h6>
              </div>
            </td>
          </tr>
        );
      }

      return tableAnnotations;
    };

    return (
      <div className="">
        <HeaderBox />
        <div>
          <div className="col-md-12">
            <div
              style={{
                minHeight: "0px",
                marginTop: "0px",
              }}
            >
              <div className="row">
                <SideBar />
                <div className="col-md-10" style={{ padding: "0px" }}>
                  <Card>
                    <CardHeader>
                      <h4 className="card-title">
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
                        </button>
                        &nbsp; Asunto: {dataCorrespondencia.issue}{" "}
                      </h4>
                      <div className="float-right">
                        <button
                          title="Editar correspondencia"
                          type="button"
                          className="btn btn-secondary btn-sm"
                          onClick={() => {
                            this.OpenOnClickEdit();
                          }}
                        >
                          <i className="fa fa-edit" />
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          title="Marcar como no leida"
                          className="btn btn-secondary btn-sm"
                        >
                          <i className="fa fa-envelope-o" />
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          title="Archivar"
                        >
                          <i className="fa fa-floppy-o" />
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          title="Imprimir"
                          className="btn btn-secondary btn-sm"
                        >
                          {" "}
                          <i className="fa fa-print" />
                        </button>
                        &nbsp;
                        {/* <button
                              title="Expandir"
                              className="btn btn-secondary btn-sm"
                              onClick={() => {
                                window.open("", "", "width=1000,height=600");
                              }}
                            >
                              {" "}
                              <i className="fa fa-expand" />
                            </button>
                            &nbsp; */}
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          title="Agregar anotación"
                          onClick={() => {
                            this.OpenModalAddanotation();
                          }}
                        >
                          <i className="fa fa-comment" />
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          title="Anotaciones"
                          className="btn btn-secondary btn-sm"
                          onClick={() => this.OpenModalAnotation()}
                        >
                          {" "}
                          <i className="fa fa-comments" aria-hidden="true" />
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          title="Usuarios relacionados"
                          onClick={() => {
                            this.OpenOnClickViewRelatedUsers();
                          }}
                        >
                          {" "}
                          <i className="fa fa-users" />{" "}
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          title="Historial"
                          onClick={() => {
                            this.OpenClickHistorialCorrespondence();
                          }}
                        >
                          <i className="fa fa-history" />
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          title="Ver radicado"
                          onClick={() => this.OpenModalSticker()}
                        >
                          <i className="fa fa-file-text-o" />
                        </button>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <div className="card-block">
                        {/* Primera seccion */}
                        <div className="">
                          <div className="card">
                            <div className="p-2 mb-1 bg-secondary text-black">
                              Detalle de la comunicación recibida
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong>Fecha de radicación</strong>
                                    </label>
                                    <dd>{dataCorrespondencia.date_filing}</dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong>Hora de radicación</strong>
                                    </label>
                                    <dd> {dataCorrespondencia.time_filing}</dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong>Sede</strong>
                                    </label>
                                    <dd> {dataSede.name}</dd>
                                  </div>
                                </div>
                              </div>
                              <hr style={styleHR} />
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong>Vigencia</strong>
                                    </label>
                                    <dd> {dataCorrespondencia.validity}</dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong>Usuario radicador</strong>
                                    </label>
                                    <dd>{dataUserFiling.name}</dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong>Tipo de documento</strong>
                                    </label>
                                    <dd>{dataTipoDocumental.name}</dd>
                                  </div>
                                </div>
                              </div>
                              <hr style={styleHR} />
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Fecha del documento </strong>
                                      <dd>
                                        {" "}
                                        {this.renderDate(
                                          dataCorrespondencia.documentDate
                                        )}{" "}
                                      </dd>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong>Nro. del documento</strong>
                                    </label>
                                    <dd>
                                      {" "}
                                      {dataCorrespondencia.documentNumber}{" "}
                                    </dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong>Consecutivo</strong>
                                    </label>
                                    <dd> {dataCorrespondencia.num_filing}</dd>
                                  </div>
                                </div>
                              </div>
                              <hr style={styleHR} />
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Nro. de radicación </strong>
                                    </label>
                                    <dd> {dataCorrespondencia.num_filing} </dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Ciudad </strong>
                                    </label>
                                    <dd> {dataCiudad.name} </dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Asunto </strong>
                                    </label>
                                    <dd> {dataCorrespondencia.issue} </dd>
                                  </div>
                                </div>
                              </div>
                              <hr style={styleHR} />
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Folios </strong>
                                    </label>
                                    <dd> 3 </dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Imágenes </strong>
                                    </label>
                                    <dd> 0 </dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Tipo de llegada </strong>
                                    </label>
                                    <dd> {dataTipoLlegada.name} </dd>
                                  </div>
                                </div>
                              </div>
                              <hr style={styleHR} />
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Guía </strong>
                                    </label>
                                    <dd>{dataCorrespondencia.guide} </dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Mensajero </strong>
                                    </label>
                                    <dd> {dataMessenger.name} </dd>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <p>Informacion importante de la radicación</p>
                         */}

                        {/* Fin primera seccion */}

                        {/* Segunda seccion */}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="card">
                              <div className="p-2 mb-1 bg-secondary text-black">
                                {" "}
                                Remitente
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-md-12">
                                    <table className="table  table-sm">
                                      <thead className="thead-light">
                                        <tr>
                                          <th>Identificación</th>
                                          <th>Nombre </th>
                                          <th>Email</th>
                                          <th>Teléfono</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>{dataInfoUser.identification}</td>
                                          <td>{dataInfoUser.name}</td>
                                          <td>{dataInfoUser.email}</td>
                                          <td>{dataInfoUser.phone}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="card">
                              <div className="p-2 mb-1 bg-secondary text-black">
                                {" "}
                                Destinatario
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-md-12">
                                    <table className="table  table-sm">
                                      <thead className="thead-light">
                                        <tr>
                                          <th>Nombre </th>
                                          <th>Dependencia</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {/* {dataTableDestinatarios()} */}
                                        {dataTableDestinatarios()}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Fin segunda seccion */}

                        {/* Tercera seccion */}
                        <div className="card">
                          <div className="p-2 mb-1 bg-secondary text-black">
                            {" "}
                            Campos adiciones{" "}
                          </div>
                          <div className="card-body">
                            <div>
                              <span style={{ fontSize: "15px" }}>
                                {" "}
                                <i className="fa fa-info-circle" /> Metadatos
                                asociados a la plantilla{" "}
                                <b>{dataPlantilla.name}</b>
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
                              <tbody>{dataTableMetadatos()}</tbody>
                            </table>
                          </div>
                        </div>
                        {/* Fin tercera seccion */}

                        {/* Cuarta seccion */}
                        <div
                          className="card card-body"
                          style={{ height: "600px", padding: "0px" }}
                        >
                          {dataAttachments.length > 0 ? (
                            <PDFViewer
                              ref={this.myViewer}
                              backend={PDFJSBackend}
                              src={urlViewFile()}
                            />
                          ) : null}
                        </div>
                        {/* Fin Cuarta seccion */}

                        {/* Quinta seccion */}
                        <div className="card">
                          <div className="p-2 mb-1 bg-secondary text-black">
                            {" "}
                            Anotaciones realizadas sobre la correspondencia{" "}
                          </div>
                          <div className="card-body">
                            <table className="table table-bordered table-sm">
                              <thead className="table-secondary">
                                <tr>
                                  <th scope="col" className="text-center">
                                    Fecha
                                  </th>
                                  {/* <th scope="col" className="text-center">
                                    Origen
                                  </th>
                                  <th scope="col" className="text-center">
                                    Destinatario
                                  </th>
                                  <th scope="col" className="text-center">
                                    Página
                                  </th> */}
                                  <th scope="col" className="text-center">
                                    Anotación
                                  </th>
                                </tr>
                              </thead>
                              <tbody>{dataTableAnnotations()}</tbody>
                            </table>
                          </div>
                        </div>
                        {/* Fin quinta seccion */}
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalAnotations
          annotationmodal={this.state.modalanotation}
          ref="child"
        />
        <ModalAddanotation
          modaladdanotation={this.state.modaladdanotation}
          ref="child2"
        />
        <ModalSticker modalsticker={this.state.modalstikcer} ref="child3" />
      </div>
    );
  }
}

ViewCorrespondence.propTypes = {};

export default ViewCorrespondence;
