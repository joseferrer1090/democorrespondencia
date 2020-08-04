import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, CardBody } from "reactstrap";
import { getUser } from "./../../../../actions/authActions";
import { decode } from "jsonwebtoken";

export const FormUpdateData = () => {
  const user = decode(localStorage.getItem("auth_token"));
  const dispatch = useDispatch();
  const getDataUser = () => {
    dispatch(getUser());
  };
  useEffect(() => {
    getDataUser();
  });
  return (
    <div className="animated fadeIn">
      <Card>
        <CardBody>
          <div className="container">
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
                  <label> Email </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    disabled
                    placeholder="email"
                  />
                </div>
              </Col>
              <Col sm="6">
                <div className="form-group">
                  <label> Usuario </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    disabled
                    placeholder="usuario"
                  />
                </div>
              </Col>
              <Col sm="12">
                <div className="float-right">
                  <button type="button" className="btn btn-secondary btn-sm">
                    {" "}
                    <i className="fa fa-pencil" /> Actualizar perfil{" "}
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
