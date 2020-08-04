import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, CardBody } from "reactstrap";
import { getUser } from "./../../../../actions/authActions";
import { decode } from "jsonwebtoken";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormUpdateData = () => {
  const user = decode(localStorage.getItem("auth_token"));
  const dispatch = useDispatch();
  const getDataUser = () => {
    dispatch(getUser());
  };
  const data = useSelector((state) => state.authReducer.user);

  useEffect(() => {
    getDataUser();
  }, []);

  const formik = useFormik({
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
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <React.Fragment>
      <div className="animated fadeIn">
        <form onSubmit={formik.handleSubmit}>
          <Card>
            <CardBody>
              <div className="container">
                <Row>
                  <Col sm="6">
                    <div className="form-group">
                      <label> Identificación </label>
                      <input
                        name="identification"
                        id="identification"
                        type="text"
                        className="form-control form-control-sm"
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
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        type="text"
                        className="form-control form-control-sm"
                      />
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="form-group">
                      <label> Fecha de nacimiento </label>
                      <input
                        name="birthdate"
                        id="birthdate"
                        type="text"
                        className="form-control form-control-sm"
                        value={formik.values.birthdate}
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
                      >
                        {" "}
                        <i className="fa fa-pencil" /> Actualizar perfil{" "}
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
