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
      width: "2.5",
    };
  }

  toggle = () => {
    this.setState((state) => ({
      visible: !state.visible,
    }));
  };

  printBarCore = () => {
    let content = document.getElementById("print1");
    let pri = document.getElementById("ifmcontentstoprint").contentWindow;
    pri.document.open();
    pri.document.write(content.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
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
                className={"text-center"}
                style={{ fontSize: "16px" }}
              >
                <i className="fa fa-info-circle" /> Por favor, imprima el
                sticker generado por el sistema y péguelo en el documento a
                radicar y procesa a escanear.
              </Alert>
              <div className="row">
                <div
                  className="col-md-6 offset-3"
                  style={{ border: "1px solid #e3e3e3" }}
                >
                  <div className="row" id="print1">
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <h4>
                          <strong>Sticker modulo de correspondencia</strong>
                        </h4>
                      </div>
                      <div className=" col-md-10 offset-2 ">
                        <form className="">
                          <div className="custom-control custom-radio custom-control-inline">
                            <strong>Vigencia</strong> : &nbsp;
                            <label
                              className="control-label"
                              htmlFor="customRadioInline1"
                            >
                              Toggle this custom radio
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <strong>Fecha de radicacion</strong> : &nbsp;
                            <label
                              className="control-label"
                              htmlFor="customRadioInline1"
                            >
                              Toggle this custom radio
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <strong>Consecutivo</strong> : &nbsp;
                            <label
                              className="control-label"
                              htmlFor="customRadioInline1"
                            >
                              Toggle this custom radio
                            </label>
                          </div>

                          <div className="custom-control custom-radio custom-control-inline">
                            <strong> Tipo de documento</strong> : &nbsp;
                            <label
                              className="control-label"
                              htmlFor="customRadioInline1"
                            >
                              Toggle this custom radio
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <strong>N° de documento</strong> : &nbsp;
                            <label
                              className="control-label"
                              htmlFor="customRadioInline1"
                            >
                              Toggle this custom radio
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <strong> Remitente</strong> : &nbsp;
                            <label
                              className="control-label"
                              htmlFor="customRadioInline1"
                            >
                              Toggle this custom radio
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <strong>Destianatarios</strong> : &nbsp;
                            <label
                              className="control-label"
                              htmlFor="customRadioInline1"
                            >
                              Toggle this custom radio
                            </label>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-8 offset-1">
                        <Barcode
                          value={this.state.valuebarcode}
                          width={this.state.width}
                        />
                      </div>
                      <br />
                      {/* <Barcode
                        value={this.state.valuebarcode}
                        with={this.state.width}
                      /> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <iframe id="ifmcontentstoprint" style={{ display: "none" }} />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12  text-center">
                  <button type="button" className="btn btn-secondary btn-sm">
                    <i className="fa fa-archive" /> Pendiente
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => this.printBarCore()}
                  >
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
