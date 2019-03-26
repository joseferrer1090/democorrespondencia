import React, { Component } from "react";
import { Progress } from "reactstrap";
import PropTypes from "prop-types";

class graphTramiteExternal extends Component {
  render() {
    return (
      <div className="">
        <div className="card">
          <div className="card-body">
            <div className="h4 m-0">50.9%</div>
            <div> Tramites de entrada </div>
            <div className="progress-xs my-3 progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "50%" }}
              />
            </div>
            <small className="text-muted">
              Correspondencia de tramite al dia
            </small>
            <div />
          </div>
        </div>
      </div>
    );
  }
}

graphTramiteExternal.propTypes = {};

export default graphTramiteExternal;
