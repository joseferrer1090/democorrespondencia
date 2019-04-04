import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";

class ModalExport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalExport
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <Modal isOpen={this.state.modal}>
        <ModalHeader>Archivo de consultar</ModalHeader>
        <ModalBody>
          <p>Probando apenas</p>
        </ModalBody>
        <ModalFooter>
          <button
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

ModalExport.propTypes = {
  modalExport: PropTypes.bool.isRequired
};

export default ModalExport;
