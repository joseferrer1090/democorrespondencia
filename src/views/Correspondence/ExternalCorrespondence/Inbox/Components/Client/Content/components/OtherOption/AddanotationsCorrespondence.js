import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AddanotationsCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modaladdanotation
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
        <Modal>
          <ModalHeader> Agregar anotación </ModalHeader>
          <ModalBody>
            <p>Probando apenas</p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

AddanotationsCorrespondence.propTypes = {};

export default AddanotationsCorrespondence;
