import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik, ErrorMessage, Form, withFormik } from "formik";
import * as Yup from "yup";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Alert,
  CardHeader,
} from "reactstrap";
import { ChangePasswordAction } from "./../../../../actions/authActions";

class ChangePasswordUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertSuccess: false,
      alertError: false,
    };
  }

  updatePassword = (username, oldpassword, newpassword) => {
    this.props.changepassword(username, oldpassword, newpassword);
  };

  render() {
    const {
      values,
      touched,
      errors,
      dirty,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
      isSubmitting,
    } = this.props;
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <div className="row">
            <Col sm="8" md={{ size: 8, offset: 2 }}>
              <Card>
                <CardBody>
                  <p className="text-center">
                    Elige un contraseña unica para proteger tu cuenta Escoge una{" "}
                    <br />
                    <small>contraseña que sea difícil de decifrar</small>
                  </p>
                  <Alert color="success">
                    <i className="fa fa-check" /> Se actualizo la contraseña del
                    usuario
                  </Alert>
                  <Alert color="danger">
                    <i className="fa fa-times" /> Error al actualizar la
                    contraseña del usuario
                  </Alert>
                  <form className="form">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>
                            {" "}
                            Contraseña actual{" "}
                            <span className="text-danger">*</span>{" "}
                          </label>
                          <input
                            name="curent_password"
                            className={`form-control form-control-sm `}
                            type="password"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>
                            {" "}
                            Nueva contraseña{" "}
                            <span className="text-danger">*</span>{" "}
                          </label>
                          <input
                            name="new_password"
                            type="password"
                            className="form-control form-control-sm"
                            placeholder={"Nueva contraseña"}
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
                            name="confirm_password"
                            type="password"
                            className="form-control form-control-sm"
                            placeholder={"Confirmar nueva contraseña"}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </CardBody>
                <CardFooter>
                  <div className="float-right">
                    <button type="submit" className="btn btn-secondary btn-sm">
                      <i className="fa fa-pencil" /> Actualizar contraseña
                    </button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ChangePasswordUser.propTypes = {};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changepassword: ({ username, oldpassword, newpassword }) => {
      dispatch(ChangePasswordAction({ username, oldpassword, newpassword }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordUser);
