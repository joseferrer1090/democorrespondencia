import React from "react";
import { withFormik } from "formik";
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

class ChangePasswordUser extends React.Component {
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
                            name="oldpasswd"
                            className={`form-control form-control-sm `}
                            type="password"
                            value={values.oldpasswd}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                            name="newpasswd"
                            type="password"
                            className="form-control form-control-sm"
                            value={values.newpasswd}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                            name="confirmpasswd"
                            type="password"
                            className="form-control form-control-sm"
                            value={values.confirmpasswd}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
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

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    oldpasswd: Yup.string().required("Necesario digitar la contraseña actual"),
    newpasswd: Yup.string().required("No puede ir la contraseña vacia"),
    confirmpasswd: Yup.string().required(
      "Se Requiere confirmar la contraseña digita"
    ),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    alert(JSON.stringify(values, 2, null));
  },
})(ChangePasswordUser);

export default connect()(formikEnhancer);
