import React, { Component } from "react";
import PropTypes from "prop-types";
import HorizontalTimeline from "react-horizontal-timeline";

// Estos valores son los que van a salir en el historico
const VALUES = ["2018-02-22", "2018-02-23"];

// Esta informacion es la que sale al seleccionar un item del historico
const EXAMPLE = [
  {
    data: "2018-02-22",
    status: "status",
    statusB: "Ready for dev",
    statusE: "In progress"
  },
  {
    data: "2018-02-23",
    status: "status",
    statusB: "In progress",
    statusE: "Done"
  }
];

class TimelineHorizontal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: -1
    };
  }
  render() {
    return (
      <div>
        <p>Probando apenas</p>
      </div>
    );
  }
}

TimelineHorizontal.propTypes = {};

export default TimelineHorizontal;
