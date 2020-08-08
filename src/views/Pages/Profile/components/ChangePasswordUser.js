import React from "react";
import { withFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Alert,
  CardHeader,
} from "reactstrap";
import { ChangePasswordAction } from "../../../../actions/authActions";

class ChangePasswordUser extends React.Component {
  state = {
    alertSuccess: null,
    alertError: null,
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
    const alertsuccess = this.props.alertS;
    const alerterror = this.props.alertE;
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
                  <Alert color="success" isOpen={alertsuccess}>
                    <i className="fa fa-check" /> Se actualizo la contraseña del
                    usuario, en 3 segundo se reinciara la sesion.
                  </Alert>
                  <Alert color="danger" isOpen={alerterror}>
                    <i className="fa fa-times" /> Error al actualizar la
                    contraseña del usuario, verifica con el adminitrador
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
                            id="oldpasswd"
                            name="oldpasswd"
                            className={`form-control form-control-sm `}
                            type="password"
                            value={values.oldpasswd}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.oldpasswd && touched.oldpasswd ? (
                            <div className="text-danger">
                              <i className="fa fa-exclamation-triangle" />{" "}
                              {errors.oldpasswd}
                            </div>
                          ) : null}
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
                            name="newpasswd"
                            type="password"
                            className="form-control form-control-sm"
                            value={values.newpasswd}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.newpasswd && touched.newpasswd ? (
                            <div className="text-danger">
                              <i className="fa fa-exclamation-triangle" />{" "}
                              {errors.newpasswd}
                            </div>
                          ) : null}
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
                            name="confirmpasswd"
                            type="password"
                            className="form-control form-control-sm"
                            value={values.confirmpasswd}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.confirmpasswd && touched.confirmpasswd ? (
                            <div className="text-danger">
                              <i className="fa fa-exclamation-triangle" />{" "}
                              {errors.confirmpasswd}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </form>
                </CardBody>
                <CardFooter>
                  <div className="float-right">
                    <button
                      type="submit"
                      className="btn btn-secondary btn-sm"
                      onClick={handleSubmit}
                    >
                      {isSubmitting ? (
                        <div>
                          <i className="fa fa-spin fa-spinner" />
                        </div>
                      ) : (
                        <div>
                          <i className="fa fa-pencil" /> Actualizar contraseña
                        </div>
                      )}
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

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    oldpasswd: Yup.string().required("Necesario digitar la contraseña actual"),
    newpasswd: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/,
        "Contraseña no valida, la contraseña debe tener al menos una letra en mayuscula, al menos un dígito, no acepta espacios en blanco y al menos un carácter especial."
      )
      .required("Se requiere nueva contraseña")
      .min(8)
      .max(15),
    confirmpasswd: Yup.string()
      .oneOf([Yup.ref("newpasswd"), null], "La contraseña no coincide")
      .min(8)
      .max(15)
      .required("Por favor confirme la contraseña"),
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    // alert(JSON.stringify(values, 2, null));
    setTimeout(() => {
      props.changepassword({
        newpassword: values.newpasswd,
        oldpassword: values.oldpasswd,
      });
      setSubmitting(true);
    }, 1300);
    resetForm({
      newpasswd: "",
      oldpassword: "",
      confirmpasswd: "",
    });
  },
})(ChangePasswordUser);

const mapStateToProps = (state) => {
  return {
    alertS: state.authReducer.userpassword.response,
    alertE: state.authReducer.userpassword.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    changepassword: ({ username, oldpassword, newpassword }) => {
      dispatch(ChangePasswordAction({ username, oldpassword, newpassword }));
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(formikEnhancer);
