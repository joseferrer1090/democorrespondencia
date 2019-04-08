import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import PropTypes from "prop-types";

class CopyCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalcopy
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modalcopy
    }));
  };

  render() {
    return (
      <Modal className={"modal-xl"} isOpen={this.state.modal} fade={false}>
        <ModalHeader>Copiar correspondencia</ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="col-md-6" style={{ border: "1px solid red" }}>
                <p>Probando apenas</p>
              </div>
              <div className="col-md-6" style={{ border: "1px solid black" }}>
                <p>Probando apenas</p>
              </div>
              <div className="col-md-12" style={{ border: "1px solid blue" }}>
                <p>Probando apenas</p>
              </div>
            </div>
          </div>
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
          <button className="btn btn-secondary btn-sm">
            {" "}
            <i className="fa fa-copy" /> Copiar{" "}
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

CopyCorrespondence.propTypes = {};

export default CopyCorrespondence;
