import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Pie } from "react-chartjs-2";

const pie = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

class CustomGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="animeted fadeIn">
        <Card>
          <CardBody>
            <div className="text-center">
              <h5>Grafica</h5>
            </div>
            <div className="chart-wrapper">
              <Pie data={pie} />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

CustomGraph.propTypes = {};

export default CustomGraph;
