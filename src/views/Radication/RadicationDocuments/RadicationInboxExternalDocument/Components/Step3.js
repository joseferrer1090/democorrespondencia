import React, { Component } from "react";
import PropTypes from "react";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="animated fadeIn">
        <div className="col-md-7 offset-3">
          <Card body>
            <div className="row">
              <div className="col-md-12">
                <h4 className="text-muted text-center">
                  Por favor, adjunte el documento escaneado.{" "}
                </h4>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Step3;
