import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class EditInformactionSticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.dataSticker,
    };
  }
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

EditInformactionSticker.propTypes = {
  dataSticker: PropTypes.object,
};

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditInformactionSticker);
