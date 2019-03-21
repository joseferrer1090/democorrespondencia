import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

class ChangePasswordUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p className="text-center">
          Elige un contraseña unica para proteger tu cuenta Escoge una <br />
          <small>contraseña que sea difícil de decifrar</small>
        </p>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  {" "}
                  Contraseña actual <span className="text-danger">*</span>{" "}
                </label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  {" "}
                  Nueva contraseña <span className="text-danger">*</span>{" "}
                </label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label>
                  {" "}
                  Repetir nueva contraseña{" "}
                  <span className="text-danger">*</span>{" "}
                </label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="float-right">
                <button type="button" className="btn btn-secondary btn-sm">
                  {" "}
                  <i className="fa fa-pencil" /> Actializar perfil{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ChangePasswordUser.propTypes = {};

export default ChangePasswordUser;
