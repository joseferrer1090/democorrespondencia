import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import GoogleDocsViewer from "react-google-docs-viewer";
class ModalViewFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalviewfiles,
      id: this.props.id
    };
  }
  toggle = id => {
    this.setState({
      modal: !this.state.modal,
      id: id
    });
  };

  render() {
    const id = this.state.id;
    return (
      <Modal isOpen={this.state.modal}>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <GoogleDocsViewer
            width="600px"
            height="780px"
            fileUrl="http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Corazon_Amicis.pdf"
          />
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              this.setState({ modal: false });
            }}
          >
            Entendido
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalViewFiles;
