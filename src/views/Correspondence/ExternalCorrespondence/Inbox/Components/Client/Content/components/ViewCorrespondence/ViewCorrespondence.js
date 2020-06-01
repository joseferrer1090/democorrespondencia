import React, { Component } from "react";
import HeaderBox from "./../../../Header/HeaderInbox";
import SideBar from "./../../../Sidebar/SidebarInboxComponent";
import {
  Card,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  CardHeader,
  CardBody,
} from "reactstrap";
import PropTypes from "prop-types";
import { browserHistory } from "react-router";
import { withRouter } from "react-router-dom";
import ModalAnotations from "./../OtherOption/AnnotationsCorrespondence";
import ModalAddanotation from "./../OtherOption/AddanotationsCorrespondence";
import ModalSticker from "./../ModalStciker/ModalSticker";
import PDFViewer from "./../../../../../../../../../utils/pdfViewer/components/PDFViewer";
import PDFJSBackend from "./../../../../../../../../../utils/pdfViewer/backend/pdfjs";
import "./css/card-custom.css";

const styleHR = {
  marginTop: "0px",
};

class ViewCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalanotation: false,
      modaladdanotation: false,
      modalstikcer: false,
      id: "",
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
    this.setState({
      id: this.props.match.params,
    });
  }

  OpenOnClickEdit = () => {
    let id = this.props.match.params.id;
    let path = `/correspondence/external/edit/${id}`;
    this.props.history.push(path);
    console.log(id);
  };

  OpenOnClickViewRelatedUsers = () => {
    let id = this.props.match.params.id;
    let path = `/correspondence/external/relatedusers/${id}`;
    this.props.history.push(path);
    console.log(id);
  };

  OpenClickHistorialCorrespondence = () => {
    let id = this.props.match.params.id;
    let path = `/correspondence/external/historial/${id}`;
    this.props.history.push(path);
    console.log(id);
  };

  render() {
    console.log(this.state.id);

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
                        </button>
                        &nbsp; Asunto: Descripcion del asunto{" "}
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
                      </h3>
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
                                    <dd> 04/10/2018</dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong>Hora de radicación</strong>
                                    </label>
                                    <dd> 09:57 AM</dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong>Sede</strong>
                                    </label>
                                    <dd> Sede I</dd>
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
                                    <dd> 2018</dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong>Usuario radicador</strong>
                                    </label>
                                    <dd>Maria Perez</dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong>Tipo de documento</strong>
                                    </label>
                                    <dd>Factura</dd>
                                  </div>
                                </div>
                              </div>
                              <hr style={styleHR} />
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Fecha del documento </strong>
                                      <dd> 04/10/2018 </dd>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong>Nro. del documento</strong>
                                    </label>
                                    <dd> 111222 </dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong>Consecutivo</strong>
                                    </label>
                                    <dd> 3</dd>
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
                                    <dd> R-3-2019-1 </dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Ciudad </strong>
                                    </label>
                                    <dd> Bogota - Distrito capital </dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Asunto </strong>
                                    </label>
                                    <dd> Asunto del documento </dd>
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
                                    <dd> A la mano </dd>
                                  </div>
                                </div>
                              </div>
                              <hr style={styleHR} />
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Gia </strong>
                                    </label>
                                    <dd>0123456987 </dd>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label>
                                      <strong> Mensajero </strong>
                                    </label>
                                    <dd> Ninguno </dd>
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
                                          <td>123456</td>
                                          <td>Avianca</td>
                                          <td>info@avianca.com.co</td>
                                          <td>52369852</td>
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
                                          <th>dependencia</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Carlos Perez</td>
                                          <td>Avianca</td>
                                        </tr>
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
                            <table className="table table-sm">
                              <thead className="thead-light">
                                <tr>
                                  <th scope="col">Campo</th>
                                  <th scope="col">Valor</th>
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
                        {/* Fin tercera seccion */}

                        {/* Cuarta seccion */}
                        <div
                          className="card card-body"
                          style={{ height: "600px", padding: "0px" }}
                        >
                          <PDFViewer
                            ref={this.myViewer}
                            backend={PDFJSBackend}
                            src={"/assets/edok_word_excel.pdf"}
                          />
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
                                  <th scope="col" className="text-center">
                                    Origen
                                  </th>
                                  <th scope="col" className="text-center">
                                    Destinatario
                                  </th>
                                  <th scope="col" className="text-center">
                                    Página
                                  </th>
                                  <th scope="col" className="text-center">
                                    Anotación
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-center" nowrap>
                                    04/10/2018 - 09:10:16
                                  </td>
                                  <td className="text-center">
                                    Dependencia I Pedro
                                  </td>
                                  <td className="text-center">
                                    (Dependencia I - Carlos Borré)
                                  </td>
                                  <td className="text-center">2</td>
                                  <td
                                    className="text-center"
                                    width="40%"
                                    nowrap
                                  >
                                    Esto es una prueba
                                  </td>
                                </tr>
                              </tbody>
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
