import React, { Component } from "react";
import PropTypes from "prop-types";
import { obtenerSticker } from "../../../../actions/stickerActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

class EditInformactionSticker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (Object.entries(this.props.sticker).length === 0) {
      this.getSticker(this.props.match.params.id);
    } else if (Object.entries(this.props.sticker).length !== null) {
      console.log(this.props.sticker);
    }
  }
  getSticker = (id) => {
    this.props.getData(id);
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <i className="fa fa-sticky-note" />
          Informacion del sticker
        </div>
        <div className="card-body">
          <div className="form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Codigo</label>
                  <input type="text" className="form-control form-control-sm" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Nombre</label>
                  <input type="text" className="form-control form-control-sm" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Descripcion</label>
                  <textarea className="form-control form-control-sm"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="text-right">
            <button type="button" className="btn btn-secondary btn-sm">
              <i className="fa fa-pencil" /> Editar informacion
            </button>
          </div>
        </div>
      </div>
    );
  }
}

EditInformactionSticker.propTypes = {};

function mapStateToProps(state) {
  return {
    sticker: state.stickerReducer.sticker,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: (id) => {
      dispatch(obtenerSticker(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditInformactionSticker));
