import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";

class FormChangeAdvanceData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <form>
          <Row>
            <Col sm="6">
              <div className="form-group">
                <label> Sede </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  disabled
                  placeholder="sede "
                />
              </div>
            </Col>
            <Col sm="6">
              <div className="form-group">
                <label>Dependencia</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  disabled
                  placeholder="dependencia asignada"
                />
              </div>
            </Col>
            <Col sm="6">
              <div className="form-group">
                <label>Cargo</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  disabled
                  placeholder="Cargo asignado"
                />
              </div>
            </Col>
            <Col sm="6">
              <div className="form-group">
                <label>Rol</label>
                <textarea
                  className="form-control form-control-sm"
                  disabled
                  placeholder="Rol o roles asignados"
                />
              </div>
            </Col>
            <Col sm="12">
              <div className="form-group">
                <label>Permisos</label>
                <textarea
                  className="form-control form-control-sm"
                  readOnly
                  placeholder="Permisos asignados por el administrador"
                />
              </div>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

FormChangeAdvanceData.propTypes = {};

export default FormChangeAdvanceData;
