import React, { Component, Fragment } from "react";
import HeaderBox from "./../../../Header/HeaderInbox";
import SideBar from "./../../../Sidebar/SidebarInboxComponent";
import { Card, CardHeader, CardBody, Collapse } from "reactstrap";
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
      isOpenCollapseFile: false,
      viewPDFid: "",
      viewPDFfileName: "",
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
    fetch(`${EXTERNAL_CORRESPONDENCE_RECEIVED}/${id}`, {
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
      viewPDFid,
      viewPDFfileName,
    } = this.state;

    const dataTableDestinatarios = () => {
      let tableDestinatarios;
      tableDestinatarios = dataDestinatarios.map((aux, idx) => {
        return (
          <tr>
            <td>{aux.name}</td>
            <td>{aux.dependence}</td>
            <td>{destinatarioOriginal(aux.original)}</td>
          </tr>
        );
      });
      return tableDestinatarios;
    };

    const destinatarioOriginal = (bool) => {
      if (bool === true) {
        return <b style={{ color: "green" }}>Si</b>;
      } else if (bool === false) {
        return <b>No</b>;
      }
    };

    const dataTableMetadatos = () => {
      let tableMetadatos;
      tableMetadatos = dataInfoMetadatos.map((aux, idx) => {
        console.log(aux);
        return (
          <tr>
            <td>{aux.name}</td>
            <td>{aux.value}</td>
          </tr>
        );
      });
      return tableMetadatos;
    };

    const dataTableFiles = () => {
      let tableFiles;
      tableFiles = dataAttachments.map((aux, idx) => {
        return (
          <tr>
            <td>{aux.filenameOriginal}</td>
            <td>{aux.numImages}</td>
            <td>{aux.size}</td>
            <td>
              {" "}
              <button
                title="Ver correspondencia"
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  toggle();
                  this.setState({
                    viewPDFid: aux.id,
                    viewPDFfileName: aux.fileName,
                  });
                }}
              >
                <i className="fa fa-eye" />
              </button>
            </td>
          </tr>
        );
      });
      return tableFiles;
    };

    const toggle = () => {
      this.setState({
        isOpenCollapseFile: !this.state.isOpenCollapseFile,
      });
    };

    const collapseViewFile = () => {
      let url = `http://localhost:8090/api/sgdea/service/external/correspondence/received/filing/attached/view/file/${viewPDFid}/${viewPDFfileName}`;
      return (
        <div
          className="card card-body"
          style={{ height: "600px", padding: "0px" }}
        >
          {viewPDFid && viewPDFfileName !== "" ? (
            <PDFViewer
              ref={this.myViewer}
              backend={PDFJSBackend}
              src={url}
            />
          ) : (
            <div className="jumbotron">
            <h6 className="text-center">No hay datos</h6>
          </div>
          )}
        </div>
      );
    };


    const dataTableAnnotations = () => {
      let tableAnnotations;
      if (dataAnnotations.length > 0) {
        tableAnnotations = dataAnnotations.map((aux, idx) => {
          return (
            <tr>
              <td width={"90"}>{this.renderDate(aux.createdAt)}</td>
              <td width={"150"}>{aux.creatorUser}</td>
              <td>{aux.annotation}</td>
              <td>{aux.page}</td>
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
                                    <dd> {dataCorrespondencia.numFolios} </dd>
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
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Guía </strong>
                                    </label>
                                    <dd>{dataCorrespondencia.guide} </dd>
                                  </div>
                                </div>
                              </div>
                              <hr style={styleHR} />
                              <div className="row">
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
                        <div className="row">
                          <div className="col-md-12">
                            <div className="card">
                              <div className="p-2 mb-1 bg-secondary text-black">
                                {" "}
                                Tercero asignado
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
                                Destinatarios asignados
                              </div>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-md-12">
                                    <table className="table  table-sm">
                                      <thead className="thead-light">
                                        <tr>
                                          <th>Nombre </th>
                                          <th>Dependencia</th>
                                          <th>Orignal</th>
                                        </tr>
                                      </thead>
                                      <tbody>{dataTableDestinatarios()}</tbody>
                                    </table>
                                  </div>
                                </div>
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
                            {dataPlantilla !== null ? (
                              <Fragment>
                                {" "}
                                <div>
                                  <span style={{ fontSize: "15px" }}>
                                    {" "}
                                    <i className="fa fa-info-circle" />{" "}
                                    Metadatos asociados a la plantilla{" "}
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
                              </Fragment>
                            ) : (
                              <Fragment>
                                <div className="jumbotron">
                                  <h6 className="text-center">No hay datos</h6>
                                </div>
                              </Fragment>
                            )}
                          </div>
                        </div>
                        <div className="card">
                          <div className="p-2 mb-1 bg-secondary text-black">
                            {" "}
                            Documentos adjuntos{" "}
                          </div>

                          <div className="card-body">
                            {dataAttachments.length > 0 ? (
                              <Fragment>
                                <table className="table table-sm">
                                  <thead className="thead-light">
                                    <tr>
                                      <th scope="col">Nombre del archivo</th>
                                      <th scope="col">Páginas</th>
                                      <th scope="col">Tamaño</th>
                                      <th scope="col">Visualizar</th>
                                    </tr>
                                  </thead>
                                  <tbody>{dataTableFiles()}</tbody>
                                </table>
                              </Fragment>
                            ) : (
                              <Fragment>
                                <div className="jumbotron">
                                  <h6 className="text-center">No hay datos</h6>
                                </div>
                              </Fragment>
                            )}
                          </div>
                        </div>
                        <Collapse isOpen={this.state.isOpenCollapseFile}>
                          {collapseViewFile()}
                        </Collapse>
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
                                  <th scope="col" className="text-center">
                                    Usuario
                                  </th>
                                  <th scope="col" className="text-center">
                                    Anotación
                                  </th>
                                  <th scope="col" className="text-center">
                                    Página
                                  </th>
                                </tr>
                              </thead>
                              <tbody>{dataTableAnnotations()}</tbody>
                            </table>
                          </div>
                        </div>
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
