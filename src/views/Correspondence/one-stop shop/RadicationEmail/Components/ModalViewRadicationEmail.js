import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
class ModalViewRadicationEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalviewradicationemail,
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
          <p>
            <b>Hello world! {id} </b>
          </p>
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

export default ModalViewRadicationEmail;
