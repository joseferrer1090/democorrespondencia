import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Row,
  Col,
} from "reactstrap";
import PropTypes from "prop-types";
import IMGCORREPONDENCE from "./../../../../../assets/img/mail-box.svg";

class ModalAddCorrespondenciaDespachada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalviewstate,
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <div>
        <Modal className="modal-lg" isOpen={this.state.modal}>
          <ModalHeader>Modificar correspondencia despachada</ModalHeader>
          <ModalBody>
            <Row>
              <Col sm="3">
                <img src={IMGCORREPONDENCE} className="img-thumbnail" />
              </Col>
              <Col sm="9">
                <div className="">
                  {" "}
                  <h5 className="" style={{ borderBottom: "1px solid black" }}>
                    {" "}
                    Datos
                  </h5>{" "}
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <dl className="param">
                        <dt> Sede </dt>
                        <dd> Sede 1 </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <dl className="param">
                        <dt> Vigencia </dt>
                        <dd> 2020 </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <dl className="param">
                        <dt> Consecutivo</dt>
                        <dd> 223 </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <dl className="param">
                        <dt> Asunto </dt>
                        <dd> BLA-4700001056</dd>
                      </dl>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <dl className="param">
                        <dt> Fecha de creación</dt>
                        <dd>1/06/2020</dd>
                      </dl>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <dl className="param">
                        <dt> Fecha de modificación</dt>
                        <dd> 3/06/2020</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button type="button" className="btn btn-success btn-sm">
              <i className="fa fa-save" /> Modificar
            </Button>
            <Button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => {
                this.setState({ modal: false });
              }}
            >
              <i className="fa fa-times" /> Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

ModalAddCorrespondenciaDespachada.propTypes = {
  modalviewstate: PropTypes.bool.isRequired,
};

export default ModalAddCorrespondenciaDespachada;
