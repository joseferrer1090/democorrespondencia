import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AnnotationsCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.annotationmodal
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
        <ModalHeader>Anotaciones adicional a la correspondencia</ModalHeader>
        <ModalBody>
          <p>Aqui va la tabla</p>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => {
              this.setState({ modal: false });
            }}
          >
            {" "}
            <i className="fa fa-times" />
            Cerrar
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

AnnotationsCorrespondence.propTypes = {
  annotationmodal: PropTypes.bool.isRequired
};

export default AnnotationsCorrespondence;
