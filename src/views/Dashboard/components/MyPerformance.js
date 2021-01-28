import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import {
  getCountReceived,
  getCountPending,
  getCountNoveltiesAnnotations,
} from "../../../actions/chartsDashboard";

class MyPerformance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getNumberReceived();
    this.props.getNumberPending();
    this.props.getNumberNoveltiesAnnotations();
  }

  render() {
    const {
      numberReceived,
      numberPending,
      numberNoveltiesAnnotations,
    } = this.props;
    const doughnut = {
      labels: ["Bandeja de entrada", "Bandeja de pendientes", "Anotaciones"],
      datasets: [
        {
          data: [numberReceived, numberPending, numberNoveltiesAnnotations],
          backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
          hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        },
      ],
    };
    return (
      <div className="animated fadeIn">
        <Card>
          <CardBody>
            <div className="text-center">
              <h5>Correspondencia externa recibida</h5>
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
const mapState = (state) => {
  return {
    numberReceived: state.chartsDashboard.numberReceived,
    numberPending: state.chartsDashboard.numberPending,
    numberNoveltiesAnnotations:
      state.chartsDashboard.numberNoveltiesAnnotations,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getNumberReceived: () => {
      dispatch(getCountReceived());
    },
    getNumberPending: () => {
      dispatch(getCountPending());
    },
    getNumberNoveltiesAnnotations: () => {
      dispatch(getCountNoveltiesAnnotations());
    },
  };
};

export default connect(mapState, mapDispatch)(MyPerformance);
