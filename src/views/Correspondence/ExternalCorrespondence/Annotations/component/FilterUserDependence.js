import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class FilterUserDependence extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Conglomerado</label>
              <select className="form-control form-control-sm">
                <option>Seleccione</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Empresa</label>
              <select className="form-control form-control-sm">
                <option>Seleccione</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Sede</label>
              <select className="form-control form-control-sm">
                <option>Seleccione</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Dependencia</label>
              <select className="form-control form-control-sm">
                <option>Seleccione</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = () => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterUserDependence);
