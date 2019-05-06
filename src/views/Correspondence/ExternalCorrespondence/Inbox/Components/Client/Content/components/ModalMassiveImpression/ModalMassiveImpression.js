import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalMassiveImpression extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalimpression
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <Modal className="modal-lg" fade={false} isOpen={this.state.modal}>
        <ModalHeader>Impresion masiva</ModalHeader>
        <ModalBody>
          <p>Probando apenas</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary btn-sm">
            <i className="fa fa-print" /> Generar impresion
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              this.setState({ modal: false });
            }}
          >
            <i className="fa fa-times" /> Cancelar{" "}
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

ModalMassiveImpression.propTypes = {
  modalimpression: PropTypes.bool.isRequired
};

export default ModalMassiveImpression;
