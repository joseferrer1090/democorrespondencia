import React, { Component, lazy, Suspense } from "react";
import { Jumbotron, Button, Row, Col } from "reactstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12">
            <div className="jumbotron jumbotron-fluid alert alert-dark">
              <h1 className="display-3">Hola, módulo de correspondencia!</h1>
              <p className="lead">
                This is a simple hero unit, a simple Jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-2" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p className="lead">
                <Button
                  color="primary"
                  onClick={() => {
                    alert("Hola mundo");
                  }}
                >
                  Learn More
                </Button>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
