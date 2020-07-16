import React, { Component } from "react";
import PropTypes from "prop-types";
import { obtenerSticker } from "../../../../actions/stickerActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Formik, withFormik } from "formik";
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
      return;
    }
  }
  getSticker = (id) => {
    this.props.getData(id);
  };

  render() {
    console.log(this.props.sticker);
    return (
      <div className="card">
        <div className="card-header">
          <i className="fa fa-sticky-note" />
          Informacion del sticker
        </div>
        <div className="card-body">
          <form className="form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Codigo</label>
                  <input
                    name="code"
                    type="text"
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Nombre</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Descripcion</label>
                  <textarea
                    name="description"
                    className="form-control form-control-sm"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="text-right">
            <button type="submit" className="btn btn-secondary btn-sm">
              <i className="fa fa-pencil" /> Editar informacion
            </button>
          </div>
        </div>
      </div>
    );
  }
}

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
