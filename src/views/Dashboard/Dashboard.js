import React, { Component, lazy, Suspense } from "react";
import { Jumbotron, Button, Row, Col, Card, CardBody } from "reactstrap";

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
          <Col sm={{ size: 8, offset: 2 }}>
            <Card body>
              <p>Probando apenas</p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
