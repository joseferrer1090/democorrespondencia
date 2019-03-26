import React, { Component } from "react";
import { Card, Row, Col, CardBody } from "reactstrap";
import { Doughnut } from "react-chartjs-2";

const doughnut = {
  labels: ["Tramites", "Comunicados", "Despachados"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

class MyPerformance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardBody>
            <div className="text-center">
              <h5>Mi Rendimiento</h5>
            </div>
            <div className="chart-wrapper">
              <Doughnut data={doughnut} />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MyPerformance;
