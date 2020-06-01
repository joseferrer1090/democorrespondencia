import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Barcode from "react-barcode";

class ModalSticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalstricker,
      valuebarcode: "barcode example",
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    console.log(this.state.valuebarcode);
    return (
      <Modal className="modal-lg" isOpen={this.state.modal} fade={false}>
        <ModalHeader>Ver radicado </ModalHeader>
        <ModalBody>
          <div className="col-sm-10 offset-1">
            <div className="card">
              <div className="p-2 mb-2  bg-secondary text-dark">
                Sticker de correspondencia recibida
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center">
                    <h4> Azul k S.A </h4>
                    <span>Correspondencia recibida</span>
                  </div>
                </div>
                <div className="col-md-10 offset-2">
                  <div className="table-responsive">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <td>Vigencia</td>
                          <td> 2019 - Consecutivo: R-372</td>
                        </tr>
                        <tr>
                          <td>Fecha de radicación</td>
                          <td>
                            <b>21/01/2019-04:13 PM</b>
                          </td>
                        </tr>
                        <tr>
                          <td>Tipo de documento</td>
                          <td> FACTURA ADMINISTRATIVA </td>
                        </tr>
                        <tr>
                          <td>Nr0. de documento</td>
                          <td> 122613</td>
                        </tr>
                        <tr>
                          <td>Remitente </td>
                          <td> Elementos Quimicos LTDA (860403097-4)</td>
                        </tr>
                        <tr>
                          <td>Destinatario</td>
                          <td> Luz ingrid R </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <Barcode value={this.state.valuebarcode} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-secondary btn-sm">
            {" "}
            <i className="fa fa-print" /> Imprimir{" "}
          </button>
          &nbsp;
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => {
              this.setState({ modal: !this.state.modal });
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

ModalSticker.propTypes = {
  modalstricker: PropTypes.bool.isRequired,
};

export default ModalSticker;
