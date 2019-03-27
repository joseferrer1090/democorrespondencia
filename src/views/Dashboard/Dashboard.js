import React, { Component, lazy, Suspense } from "react";
import { Row, Col } from "reactstrap";
import GraphCorrespondenceExterna from "./components/graphCorrespondenceExternal";
import GraphCorrespondenceExternaDesapachada from "./components/graphCorrespondenceExternalDesapachada";
import GraphTramiteExternal from "./components/graphTramiteExternal";
import GraphTramiteExternalDespachado from "./components/graphTramiteExternalDespachados";
import MyPerformance from "./components/MyPerformance";
import CustomGraph from "./components/CustomGraph";

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
      <div className="container-fluid animated fadeIn">
        <Row>
          <Col sm="3">
            <GraphCorrespondenceExterna />
          </Col>
          <Col sm="3">
            <GraphCorrespondenceExternaDesapachada />
          </Col>
          <Col sm="3">
            <GraphTramiteExternal />
          </Col>
          <Col sm="3">
            <GraphTramiteExternalDespachado />
          </Col>
          <Col sm="6">
            <MyPerformance />
          </Col>
          <Col sm="6">
            <CustomGraph />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
