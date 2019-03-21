import React, { Component } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Collapse,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from "reactstrap";
import PropTypes from "prop-types";

class ModalEditTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalviewedit,
      collapse1: false,
      collapse2: false,
      collapse3: false,
      collapse4: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleCollapse1 = () => {
    this.setState(state => ({ collapse1: !this.state.collapse1 }));
  };

  toggleCollapse2 = () => {
    this.setState(state => ({ collapse2: !this.state.collapse2 }));
  };

  toggleCollapse3 = () => {
    this.setState(state => ({ collapse3: !this.state.collapse3 }));
  };

  toggleCollapse4 = () => {
    this.setState(state => ({ collapse4: !this.state.collapse4 }));
  };

  render() {
    return (
      <Modal className="modal-lg" isOpen={this.state.modal}>
        <ModalHeader>Editar tema seleccionado</ModalHeader>
        <ModalBody>
          <Row>
            <Col sm="12">
              <Card>
                <CardHeader
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.toggleCollapse1();
                  }}
                >
                  Header
                </CardHeader>
                <Collapse isOpen={this.state.collapse1}>
                  <CardBody>
                    <p>Datos del formulario</p>
                  </CardBody>
                </Collapse>
              </Card>
            </Col>
            <Col sm="12">
              <Card>
                <CardHeader
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.toggleCollapse2();
                  }}
                >
                  Body
                </CardHeader>
                <Collapse isOpen={this.state.collapse2}>
                  <CardBody>
                    <p>Datos del formulario</p>
                  </CardBody>
                </Collapse>
              </Card>
            </Col>
            <Col sm="12">
              <Card>
                <CardHeader
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.toggleCollapse3();
                  }}
                >
                  Content
                </CardHeader>
                <Collapse isOpen={this.state.collapse3}>
                  <CardBody>
                    <p>Datos del formulario</p>
                  </CardBody>
                </Collapse>
              </Card>
            </Col>
            <Col sm="12">
              <Card>
                <CardHeader
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.toggleCollapse4();
                  }}
                >
                  Otros
                </CardHeader>
                <Collapse isOpen={this.state.collapse4}>
                  <CardBody>
                    <p>Datos del formulario</p>
                  </CardBody>
                </Collapse>
              </Card>
            </Col>
          </Row>
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
            <i className="fa fa-pencil" /> Editar tema{" "}
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

ModalEditTheme.propTypes = {
  modalviewedit: PropTypes.bool.isRequired
};

export default ModalEditTheme;
