import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Collapse,
  Col,
  Row
} from "reactstrap";

class ChangeThemeUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      collpase2: false,
      collapse3: false,
      collapse4: false
    };
  }

  toggle = () => {
    this.setState(state => ({ collapse: !this.state.collapse }));
  };

  toggle2 = () => {
    this.setState(state => ({ collapse2: !this.state.collapse2 }));
  };
  toggle3 = () => {
    this.setState(state => ({ collapse3: !this.state.collapse3 }));
  };
  toggle4 = () => {
    this.setState(state => ({ collapse4: !this.state.collapse4 }));
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardBody>
            <div className="container">
              <Row>
                <Col sm="12">
                  <Card>
                    <CardHeader
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.toggle();
                      }}
                    >
                      {" "}
                      Header{" "}
                    </CardHeader>
                    <Collapse isOpen={this.state.collapse}>
                      <CardBody>
                        <p>Datos del formulario para editar tema</p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </Col>
                <Col sm="12">
                  <Card>
                    <CardHeader
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.toggle2();
                      }}
                    >
                      {" "}
                      Body{" "}
                    </CardHeader>
                    <Collapse isOpen={this.state.collapse2}>
                      <CardBody>
                        <p>Datos del formulario para editar tema</p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </Col>
                <Col sm="12">
                  <Card>
                    <CardHeader
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.toggle3();
                      }}
                    >
                      {" "}
                      Content{" "}
                    </CardHeader>
                    <Collapse isOpen={this.state.collapse3}>
                      <CardBody>
                        <p>Datos del formulario para editar tema</p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </Col>
                <Col sm="12">
                  <Card>
                    <CardHeader
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.toggle4();
                      }}
                    >
                      {" "}
                      Otros{" "}
                    </CardHeader>
                    <Collapse isOpen={this.state.collapse4}>
                      <CardBody>
                        <p>Datos del formulario para editar tema</p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </Col>
                <Col sm="12">
                  <div className="float-right">
                    <button className="btn btn-secondary btn-sm">
                      {" "}
                      <i className="fa fa-times" /> Borrar{" "}
                    </button>
                    &nbsp;
                    <button className="btn btn-secondary btn-sm">
                      {" "}
                      <i className="fa fa-edit" /> Nuevo tema{" "}
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

ChangeThemeUser.propTypes = {};

export default ChangeThemeUser;
