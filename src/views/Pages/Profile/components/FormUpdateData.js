import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

class FormUpdateData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="6">
            <div className="form-group">
              <label> Identificación </label>
              <input
                type="text"
                className="form-control form-control-sm"
                disabled
                placeholder="identificación"
              />
            </div>
          </Col>
          <Col sm="6">
            <div className="form-group">
              <label> Nombre </label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </Col>
          <Col sm="6">
            <div className="form-group">
              <label> Fecha de nacimiento </label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </Col>
          <Col sm="6">
            <div className="form-group">
              <label> Telefono </label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </Col>
          <Col sm="12">
            <div className="form-group">
              <label> Direccion </label>
              <textarea className="form-control form-control-sm" />
            </div>
          </Col>
          <Col sm="6">
            <div className="form-group">
              <label> Usuario </label>
              <input
                type="text"
                className="form-control form-control-sm"
                disabled
              />
            </div>
          </Col>
          <Col sm="6">
            <div className="form-group">
              <label> Email </label>
              <input
                type="text"
                className="form-control form-control-sm"
                disabled
              />
            </div>
          </Col>
          <Col sm="12">
            <div className="float-right">
              <button type="button" className="btn btn-outline-secondary">
                {" "}
                <i className="fa fa-pencil" /> Actializar perfil{" "}
              </button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

FormUpdateData.propTypes = {};

export default FormUpdateData;
