import React, { Component } from "react";
import { Progress } from "reactstrap";
import PropTypes from "prop-types";

class graphCorrespondenceExternal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <div className="card">
          <div className="card-body">
            <div className="h4 m-0">89.9%</div>
            <div>Correspondencia de entrada</div>
            <div className="progress-xs my-3 progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "25%" }}
              />
            </div>
            <small className="text-muted">
              Correspondencia de entrada por dia
            </small>
            <div />
          </div>
        </div>
      </div>
    );
  }
}

graphCorrespondenceExternal.propTypes = {};

export default graphCorrespondenceExternal;
