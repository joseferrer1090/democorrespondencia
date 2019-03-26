import React, { Component } from "react";
import { Progress } from "reactstrap";

class graphCorrespondenceExternalDesapachada extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <div className="card">
          <div className="card-body">
            <div className="h4 m-0">10.9%</div>
            <div>Correspondencia despachada</div>
            <div className="progress-xs my-3 progress">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "10%" }}
              />
            </div>
            <small className="text-muted">
              Correspondencia despacha externa
            </small>
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default graphCorrespondenceExternalDesapachada;
