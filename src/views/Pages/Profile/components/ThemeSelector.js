import React, { Component } from "react";
import {
  Row,
  Col,
  Alert,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "reactstrap";
import ModalEdit from "./ModalEditTheme";

class ThemeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modaledit: false
    };
  }

  ModalEdit() {
    this.refs.child.toggle();
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardBody>
            <div className="container">
              <Row>
                <Col sm="12">
                  <Card body outline color="ligth">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mt-2">
                          <input type="radio" className="zoom-radio" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        {" "}
                        <h3 className="text-center">
                          <a
                            onClick={() => {
                              this.ModalEdit();
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {" "}
                            <b> Tema 1 </b>{" "}
                          </a>
                        </h3>{" "}
                      </div>
                      <div
                        className="col-md-4"
                        //   style={{ border: "1px solid red" }}
                      >
                        <div className="text-center">
                          {/* <img src={themeSVG} width={30} className="float-right" /> */}
                          <i className="fa fa-paint-brush fa-2x float-right" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col sm="12">
                  <Card body outline color="ligth">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mt-2">
                          <input type="radio" className="zoom-radio" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        {" "}
                        <h3 className="text-center">
                          <a
                            onClick={() => {
                              this.ModalEdit();
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {" "}
                            <b> Tema 2 </b>{" "}
                          </a>
                        </h3>{" "}
                      </div>
                      <div
                        className="col-md-4"
                        //   style={{ border: "1px solid red" }}
                      >
                        <div className="text-center">
                          {/* <img src={themeSVG} width={30} className="float-right" /> */}
                          <i className="fa fa-paint-brush fa-2x float-right" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col sm="12">
                  <Card body outline color="ligth">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mt-2">
                          <input type="radio" className="zoom-radio" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        {" "}
                        <h3 className="text-center">
                          <a
                            onClick={() => {
                              this.ModalEdit();
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {" "}
                            <b> Tema 3 </b>{" "}
                          </a>
                        </h3>{" "}
                      </div>
                      <div
                        className="col-md-4"
                        //   style={{ border: "1px solid red" }}
                      >
                        <div className="text-center">
                          {/* <img src={themeSVG} width={30} className="float-right" /> */}
                          <i className="fa fa-paint-brush fa-2x float-md-right" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col sm="12">
                  <Card body outline color="ligth">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mt-2">
                          <input type="radio" className="zoom-radio" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        {" "}
                        <h3 className="text-center">
                          <a
                            onClick={() => {
                              this.ModalEdit();
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {" "}
                            <b> Tema 4 </b>{" "}
                          </a>
                        </h3>{" "}
                      </div>
                      <div
                        className="col-md-4"
                        //   style={{ border: "1px solid red" }}
                      >
                        <div className="text-center">
                          {/* <img src={themeSVG} width={30} className="float-right" /> */}
                          <i className="fa fa-paint-brush fa-2x float-right" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
              <ModalEdit modalviewedit={this.state.modaledit} ref="child" />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ThemeSelector;
