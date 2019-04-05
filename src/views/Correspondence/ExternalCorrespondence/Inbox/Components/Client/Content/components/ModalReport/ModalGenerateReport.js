import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";

class ModalGenerateReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalgeneralreport
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <Modal className="modal-xl" fade={false} isOpen={this.state.modal}>
        <ModalHeader> Generar reporte general </ModalHeader>
        <ModalBody>
          <p className="text-justify">
            Este reporte se genero teniendo en cuenta la usabilidad que haya
            configurado el usuario
          </p>
          <embed
            src="http://www.africau.edu/images/default/sample.pdf"
            width={"100%"}
            height={500}
            type="application/pdf"
          />
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
        </ModalFooter>
      </Modal>
    );
  }
}

ModalGenerateReport.propTypes = {};

export default ModalGenerateReport;
