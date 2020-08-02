import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import Barcode from "react-barcode";

class PreviewStickerConfiguration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            {" "}
            <i className="fa fa-globe" /> Previsualizar Sticer
          </CardHeader>
          <CardBody>
            <div className="row">
              <div
                className="col-md-3 offset-md-4 text-center"
                style={{
                  border: "1px solid #e3e3e3",
                  backgroundColor: "#e3e3e3",
                }}
              >
                <table
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    justifyItems: "space-between",
                  }}
                >
                  <tbody>
                    <tr className="text-center">fecha: dkskdk</tr>
                    <tr className="text-center">fecha: dkskdk</tr>
                    <tr className="text-center">fecha: dkskdk</tr>
                    <tr className="text-center">fecha: dkskdk</tr>
                  </tbody>
                </table>
                <Barcode
                  value="https://google.com.co"
                  width="1"
                  format={"CODE128"}
                  displayValue
                  fontSize={"15"}
                  background="#e3e3e3"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default PreviewStickerConfiguration;
