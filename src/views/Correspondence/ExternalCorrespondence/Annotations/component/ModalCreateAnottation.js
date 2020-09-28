import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalCreateAnottation extends Component {
  constructor(props) {
    super();
    this.state = {
      modal: props.modalnewanottation,
    };
  }
  toggle = () => {
    this.setState({
      modal: !this.props.modalnewanottation,
    });
  };
  render() {
    return (
      <Modal className="modal-lg" isOpen={this.state.modal}>
        <ModalHeader>
          {" "}
          <i className="fa fa-sticky-note" /> Anotacion
        </ModalHeader>
        <ModalBody>Probnado</ModalBody>
        <ModalFooter>
          <div className="float-right">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => {
                this.setState({
                  modal: false,
                });
              }}
            >
              <i className="fa fa-times" /> Cerrer
            </button>
            &nbsp;
            <button type="button" className="btn btn-success btn-sm">
              <i className="fa fa-check" /> Crear anotacion
            </button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(ModalCreateAnottation);
