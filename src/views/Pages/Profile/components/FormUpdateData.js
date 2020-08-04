import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, CardBody, Alert } from "reactstrap";
import { getUser } from "./../../../../actions/authActions";
import { USER_PROFILE_UPDATE } from "./../../../../services/EndPoints";
import { decode } from "jsonwebtoken";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";

export const FormUpdateData = () => {
  const token = localStorage.getItem("auth_token");
  const user = decode(localStorage.getItem("auth_token"));
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);

  const dispatch = useDispatch();
  const getDataUser = () => {
    dispatch(getUser());
  };

  const data = useSelector((state) => state.authReducer.user);
  const { id } = useSelector((state) => state.authReducer);
  useEffect(() => {
    getDataUser();
  }, []);

  const formatDate = (date) => {
    return moment(date).format("YYYY-MM-DD");
  };

  const validationschema = () =>
    Yup.object.shape({
      name: Yup.string().required("Nombre necesario para la actualizacion"),
      birthdate: Yup.string(),
      phone: Yup.string(),
      address: Yup.string(),
    });

  const formik = useFormik({
    ValidationSchema: validationschema,
    enableReinitialize: true,
    initialValues: {
      identification: data.identification || "",
      name: data.name || "",
      birthdate: data.birthDate || "",
      phone: data.phone || "",
      address: data.address || "",
      email: data.email || "",
      username: data.username || "",
    },
    onSubmit: (values, { setSubmitting }) => {
      fetch(`${USER_PROFILE_UPDATE}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          id: id,
          userNameAuthenticate: user.user_name,
          name: values.name,
          phone: values.phone,
          address: values.address,
          birthDate: formatDate(values.birthdate),
        }),
      })
        .then((response) => {
          if (response.ok) {
            setAlertSuccess(true);
            setTimeout(() => {
              setAlertSuccess(false);
              setSubmitting(false);
            }, 1200);
          } else if (response.status === 400) {
            setAlertError(true);
            setTimeout(() => {
              setAlertError(false);
              setSubmitting(false);
            }, 1200);
          } else if (response.status === 500) {
            setAlertError(true);
            setTimeout(() => {
              setAlertError(false);
              setSubmitting(false);
            }, 1200);
          }
        })
        .catch((err) => {
          console.log(`Error => ${err}`);
        });
    },
  });
  return (
    <React.Fragment>
      <div className="animated fadeIn">
        <form onSubmit={formik.handleSubmit}>
          <Card>
            <CardBody>
              <div className="container">
                <Alert color="success" isOpen={alertSuccess}>
                  <i className="fa fa-check-circle" /> Se Actualizaron los datos
                  de tu perfil
                </Alert>
                <Alert color="danger" isOpen={alertError}>
                  <i className="fa fa-times" /> Error al Actualizar los datos de
                  tu perfil
                </Alert>
                <Row>
                  <Col sm="6">
                    <div className="form-group">
                      <label> Identificación </label>
                      <input
                        name="identification"
                        id="identification"
                        type="text"
                        className={`form-control form-control-sm`}
                        value={formik.values.identification}
                        onChange={formik.handleChange}
                        disabled
                      />
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="form-group">
                      <label> Nombre </label>
                      <input
                        name="name"
                        id="name"
                        className={`form-control form-control-sm ${
                          formik.errors.name &&
                          formik.touched.name &&
                          "is-invalid"
                        }`}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                      />
                      <div className="" style={{ color: "#D54B4B" }}>
                        {formik.errors.name && formik.touched.name ? (
                          <i className="fa fa-exclamation-triangle" />
                        ) : null}
                      </div>
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="form-group">
                      <label> Fecha de nacimiento </label>
                      <input
                        name="birthdate"
                        id="birthdate"
                        type="date"
                        className="form-control form-control-sm"
                        value={formatDate(formik.values.birthdate)}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="form-group">
                      <label> Telefono </label>
                      <input
                        name="phone"
                        id="phone"
                        type="text"
                        className="form-control form-control-sm"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </Col>
                  <Col sm="12">
                    <div className="form-group">
                      <label> Direccion </label>
                      <textarea
                        className="form-control form-control-sm"
                        id="address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="form-group">
                      <label> Email </label>
                      <input
                        name="email"
                        id="email"
                        type="text"
                        className="form-control form-control-sm"
                        disabled
                        value={formik.values.email}
                      />
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="form-group">
                      <label> Usuario </label>
                      <input
                        name="username"
                        id="username"
                        type="text"
                        className="form-control form-control-sm"
                        value={formik.values.username}
                        disabled
                      />
                    </div>
                  </Col>
                  <Col sm="12">
                    <div className="float-right">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-sm"
                        disabled={formik.isSubmitting}
                      >
                        {formik.isSubmitting ? (
                          <i className="fa fa-spinner fa-spin" />
                        ) : (
                          <div>
                            <i className="fa fa-refresh" /> Actualizar perfil
                          </div>
                        )}
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </form>
      </div>
    </React.Fragment>
  );
};
