import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";
import Barcode from "react-barcode";

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      valuebarcode: "barcodexample",
      width: "5.0"
    };
  }

  toggle = () => {
    this.setState(state => ({
      visible: !state.visible
    }));
  };

  render() {
    return (
      <div className="animated fadeIn">
        <div className="col-md-8 offset-2">
          <p />
        </div>
        <div className="col-md-10 offset-1">
          <div className="card">
            <div className="p-2 mb-1 bg-secondary text-dark">Sticker</div>
            <div className="card-body">
              <Alert
                color="warning"
                isOpen={this.state.visible}
                toggle={this.toggle}
              >
                <p className="text-center" style={{ fontSize: "16px" }}>
                  Por favor, imprima el sticker generado por el sistema y
                  péguelo en el documento a radicar y procesa a escanear.
                </p>
              </Alert>
              <div className="row">
                <div className="col-md-12 offset-3">
                  <div className="img-responsive">
                    <Barcode
                      value={this.state.valuebarcode}
                      with={this.state.width}
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12  text-center">
                  <button type="button" className="btn btn-secondary btn-sm">
                    <i className="fa fa-archive" /> Pendiente
                  </button>
                  &nbsp;
                  <button type="button" className="btn btn-secondary btn-sm">
                    {" "}
                    <i className="fa fa-print" /> Imprimir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Step2;
