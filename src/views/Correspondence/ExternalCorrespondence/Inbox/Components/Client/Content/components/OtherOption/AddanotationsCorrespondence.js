import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  Collapse
} from "reactstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class AddanotationsCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.addanotation
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <div>
        <Modal fade={false} className="modal-lg" isOpen={this.state.modal}>
          <ModalHeader> Agregar anotación </ModalHeader>
          <ModalBody>
            <form>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Conglomerado</label>
                    <select className="form-control form-control-sm">
                      <option>Seleccione</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Empresa</label>
                    <select className="form-control form-control-sm">
                      <option>Seleccione</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Sede</label>
                    <select className="form-control form-control-sm">
                      <option>Seleccione</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label> Dependencia </label>
                    <select className="form-control form-control-sm">
                      <option>Seleccione</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Grupo</label>
                    <select className="form-control form-control-sm">
                      <option>Seleccione</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Buscar destinatario</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Destinatarios disponibles</label>
                    <textarea
                      className="form-control form-control-sm"
                      disabled
                      placeholder="lista de destinatarios filtrada"
                      style={{ height: "80px" }}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm float-right"
                  >
                    {" "}
                    <i className="fa fa-angle-double-right" /> Todos{" "}
                  </button>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Destinatarios asignados{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control form-control-sm"
                      disabled
                      placeholder="Lista de asignados"
                      style={{ height: "80px" }}
                    />{" "}
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm float-right"
                  >
                    {" "}
                    <i className="fa fa-angle-double-left" /> Todos{" "}
                  </button>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>
                      Detalle <span className="text-danger">*</span>
                    </label>
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Hello from ckeditor</p>"
                      onInit={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                      }}
                      onBlur={editor => {
                        console.log("Blur.", editor);
                      }}
                      onFocus={editor => {
                        console.log("Focus.", editor);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
                      {" "}
                      Ubicar la anotación en la página{" "}
                      <span className="text-danger">*</span>{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => {
                this.setState({ modal: false });
              }}
            >
              {" "}
              <i className="fa fa-times" /> Cerrar{" "}
            </button>
            <button type="button" className="btn btn-secondary btn-sm">
              {" "}
              <i className="fa fa-pencil" /> Agregar anotación{" "}
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

AddanotationsCorrespondence.propTypes = {
  addanotation: PropTypes.bool.isRequired
};

export default AddanotationsCorrespondence;
