import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ListGroup
} from "reactstrap";
import PropTypes from "prop-types";

class ModalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalreport
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <Modal className="modal-xl" isOpen={this.state.modal} fade={false}>
        <ModalHeader>Plantilla de correspondencia recibida</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <label> Fecha de radicación desde </label>
                <input type="date" className="form-control form-control-sm" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Fecha de radicación haste </label>
                <input type="date" className="form-control form-control-sm" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label> Consecutivo desde </label>
                <input type="text" className="form-control form-control-sm" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Consecutivo hasta</label>
                <input type="text" className="form-control form-control-sm" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Conglomerado </label>
                <select className="form-control form-control-sm">
                  <option>Seleccione...</option>
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Empresa </label>
                <select className="form-control form-control-sm">
                  <option>Seleccione...</option>
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Sede </label>
                <select className="form-control form-control-sm">
                  <option>Seleccione...</option>
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Dependencia </label>
                <select className="form-control form-control-sm">
                  <option>Seleccione...</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Vigencia </label>
                <select className="form-control form-control-sm">
                  <option>Seleccione...</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Mensajero </label>
                <select className="form-control form-control-sm">
                  <option>Seleccione...</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Registro por páginas </label>
                <select className="form-control form-control-sm">
                  <option>Seleccione...</option>
                </select>
              </div>
            </div>
          </div>
          <embed
            src="http://www.africau.edu/images/default/sample.pdf"
            width={"100%"}
            height={375}
            type="application/pdf"
          />
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary btn-sm">
            {" "}
            <i className="fa fa-file-pdf-o" /> Generar{" "}
          </button>
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
        </ModalFooter>
      </Modal>
    );
  }
}

ModalReport.propTypes = {
  modalreport: PropTypes.bool.isRequired
};

export default ModalReport;
