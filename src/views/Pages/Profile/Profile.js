import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardFooter,
  CardHeader,
  Row,
  Col
} from "reactstrap";
import imgProfile from "./../../../assets/img/user_profile.svg";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="3">
            <div className="card">
              {" "}
              <a
                className="text-center"
                onClick={() => {
                  alert("Probando");
                }}
              >
                <img
                  className="img-responsive"
                  src={imgProfile}
                  style={{ margin: "10px" }}
                />
              </a>
              <CardTitle>
                <p className="text-center">
                  {" "}
                  Nombre del usuario{" "}
                  <small className="form-text"> Administrador </small>{" "}
                </p>
                <address>
                  <div style={{ margin: "10px ", fontSize: "13px" }}>
                    {" "}
                    <p className="text-center">
                      <i className="fa fa-phone-square" />
                      {"   "}+(1234) - 5678910
                    </p>
                    <p className="text-center">
                      <i className="fa fa-envelope" /> {"   "} admin@admin.com
                    </p>
                  </div>
                </address>
              </CardTitle>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <i className="fa fa-lock" /> Permisos asignados
                </CardHeader>
                <CardBody>
                  <p>Probando</p>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="9">
            <div>
              <Card body style={{ height: "420px" }}>
                <p>Probando apenas</p>
              </Card>
            </div>
            <div>
              <Card body style={{ height: "120px" }}>
                <p>Cambio de contraseña</p>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

Profile.propTypes = {};

export default Profile;
