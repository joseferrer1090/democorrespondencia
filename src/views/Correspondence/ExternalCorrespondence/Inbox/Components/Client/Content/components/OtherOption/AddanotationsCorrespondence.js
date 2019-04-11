import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
        <Modal className="modal-lg" isOpen={this.state.modal}>
          <ModalHeader> Agregar anotación </ModalHeader>
          <ModalBody>
            <p>Probando apenas</p>
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
