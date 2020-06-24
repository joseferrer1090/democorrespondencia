import React, { Component } from "react";
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

class Page404 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">404</h1>
                <h4 className="pt-3">Oops! Estas perdido</h4>
                <p className="text-muted float-left">
                  No se encontró la página que busca.
                </p>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    window.location.href = "http://localhost:3000/#/";
                  }}
                >
                  {" "}
                  <i className="fa fa-lock" /> Login{" "}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page404;
