import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";
import fileCSV from "./../../../../../../../../../assets/img/file_csv.svg";

class ModalExportRecibidoDespachado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalrecibido
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <Modal isOpen={this.state.modal} fade={false}>
        <ModalHeader>
          Recibido / Despachado <img src={fileCSV} width="5%" />{" "}
        </ModalHeader>
        <ModalBody>
          <p className="text-justify">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500{" "}
          </p>
          <form>
            <div className="form-group">
              <label>
                {" "}
                Separador <span className="text-danger">*</span>{" "}
              </label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary btn-sm">
            {" "}
            <i className="fa fa-download" /> Exportar{" "}
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

ModalExportRecibidoDespachado.propTypes = {
  modalrecibido: PropTypes.bool.isRequired
};

export default ModalExportRecibidoDespachado;
