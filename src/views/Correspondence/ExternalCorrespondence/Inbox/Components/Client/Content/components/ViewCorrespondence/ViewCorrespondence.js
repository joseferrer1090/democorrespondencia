import React, { Component } from "react";
import HeaderBox from "./../../../Header/HeaderInbox";
import SideBar from "./../../../Sidebar/SidebarInboxComponent";
import {
  Card,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";
import PropTypes from "prop-types";
import { browserHistory } from "react-router";
import { withRouter } from "react-router-dom";
import ModalAnotations from "./../OtherOption/AnnotationsCorrespondence";
import ModalAddanotation from "./../OtherOption/AddanotationsCorrespondence";
import PDFViewer from "./../../../../../../../../../utils/pdfViewer/components/PDFViewer";
import PDFJSBackend from "./../../../../../../../../../utils/pdfViewer/backend/pdfjs";

class ViewCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalanotation: false,
      modaladdanotation: false,
      id: ""
    };
    this.myViewer = React.createRef();
  }

  OpenModalAnotation = () => {
    this.refs.child.toggle();
  };

  OpenModalAddanotation = () => {
    this.refs.child2.toggle();
  };

  componentDidMount() {
    this.setState({
      id: this.props.match.params
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
                        </button>
                        &nbsp; Asunto: Descripcion del asunto{" "}
                        <div className="float-right">
                          <button
                            title="Editar correspndencia"
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
                            title="Marca como no leida"
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
                        </div>
                      </h3>
                      <hr style={{ marginTop: "0px" }} />
                    </div>
                    {/* Primera seccion */}
                    <div className=" card card-body">
                      <p>Informacion importante de la radicación</p>
                    </div>
                    {/* Fin primera seccion */}

                    {/* Segunda seccion */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card card-body">
                          <p>Remitente</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card card-body">
                          <p>Destinatario</p>
                        </div>
                      </div>
                    </div>
                    {/* Fin segunda seccion */}

                    {/* Tercera seccion */}
                    <div className="card card-body">
                      <p>Informacion del documento</p>
                    </div>
                    {/* Fin tercera seccion */}

                    {/* Cuarta seccion */}
                    <div
                      className="card card-body"
                      style={{ height: "600px", padding: "0px" }}
                    >
                      {/* <embed
                        src="http://www.africau.edu/images/default/sample.pdf"
                        width={"100%"}
                        height={600}
                        type="application/pdf"
                      /> */}
                      <PDFViewer
                        ref={this.myViewer}
                        backend={PDFJSBackend}
                        src={"/assets/edok_word_excel.pdf"}
                      />
                    </div>
                    {/* Fin Cuarta seccion */}

                    {/* Quinta seccion */}
                    <div className="card card-body">
                      <p>Detalles de la radicación</p>
                    </div>
                    {/* Fin quinta seccion */}
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
      </div>
    );
  }
}

ViewCorrespondence.propTypes = {};

export default ViewCorrespondence;
