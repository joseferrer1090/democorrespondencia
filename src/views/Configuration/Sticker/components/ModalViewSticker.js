import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { obtenerSticker } from "../../../../actions/stickerActions";
import moment from "moment";

import IMGSTICKER from "./../../../../assets/img/sticker.svg";

class ModalViewSticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalview,
      id: this.props.id,
    };
  }

  toggle = (id) => {
    this.setState({
      id: id,
      modal: !this.state.modal,
    });
    this.getSticker(id);
  };

  getSticker = (id) => {
    this.props.getDataSticker(id);
  };

  converDate = (data) => {
    let date;
    date = new Date(data);
    return moment(date).format("DD-MM-YYYY, h:mm:ss a");
  };

  render() {
    const datasticker = this.props.sticker;
    return (
      <Modal className={"modal-lg"} isOpen={this.state.modal}>
        <ModalHeader>Informacion del sticker {datasticker.name}</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-3">
              <img src={IMGSTICKER} width={"100%"} alt="imagen_sticker" />
            </div>
            <div className="col-md-9">
              <div className="card card-body">
                <div className="col-md-12">
                  <form className="form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-gorup">
                          <dt>Codigo</dt>
                          <dd>{datasticker.code}</dd>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <dt>Nombre</dt>
                          <dd>{datasticker.name}</dd>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <dt>Descripcion</dt>
                          <dd>{datasticker.description}</dd>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <dt>Fecha de creacion</dt>
                          <dd>{this.converDate(datasticker.createdAt)}</dd>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <dt> Fecha de modificacion</dt>
                          <dd>{this.converDate(datasticker.updatedAt)}</dd>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
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
            <i className="fa fa-times" />
            Cerrar
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

ModalViewSticker.propTypes = {
  modalview: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    sticker: state.stickerReducer.sticker,
  };
}

function mapDispatch(dispatch) {
  return {
    getDataSticker(id) {
      dispatch(obtenerSticker(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatch, null, {
  forwardRef: true,
})(ModalViewSticker);
