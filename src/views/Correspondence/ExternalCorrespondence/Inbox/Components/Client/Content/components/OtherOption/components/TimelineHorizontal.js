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
      curIdx: 0, //
      prevIdx: -1 //
    };
  }
  render() {
    const { curIdx, prevIdx } = this.state;
    const curStatus = EXAMPLE[curIdx].statusB;
    const prevStatus = prevIdx >= 0 ? EXAMPLE[prevIdx].statusB : "";

    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "100px",
            margin: "0 auto",
            marginTop: "20px",
            fontSize: "15px"
          }}
        >
          <HorizontalTimeline
            styles={{
              background: "#f8f8f8",
              foreground: "#1A79AD",
              outline: "#dfdfdf"
            }}
            index={this.state.curIdx}
            indexClick={index => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, prevIdx: curIdx });
            }}
            values={EXAMPLE.map(x => x.data)}
          />
        </div>
        <div className="text-center">
          {/* any arbitrary component can go here */}
          {curStatus} - {prevStatus}
        </div>
      </div>
    );
  }
}

TimelineHorizontal.propTypes = {};

export default TimelineHorizontal;
