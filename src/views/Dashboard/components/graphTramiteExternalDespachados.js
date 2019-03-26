import React, { Component } from "react";
import { Progress } from "reactstrap";
import PropTypes from "prop-types";

class graphTramiteExternalDespachados extends Component {
  render() {
    return (
      <div className="">
        <div className="card">
          <div className="card-body">
            <div className="h4 m-0">5%</div>
            <div>Tramites despachados</div>
            <div className="progress-xs my-3 progress">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "5%" }}
              />
            </div>
            <small className="text-muted">Tramites despachados en el dia</small>
            <div />
          </div>
        </div>
      </div>
    );
  }
}

graphTramiteExternalDespachados.propTypes = {};

export default graphTramiteExternalDespachados;
