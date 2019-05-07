import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderComponent from "./Components/Header/HeaderInbox";
import "bs-stepper/dist/css/bs-stepper.css";
import Title from "./Components/Steps/Title";
import Stepper from "bs-stepper";

class RadicationDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="row">
          <div className="col-md-12" style={{ border: "1px solid green" }}>
            <Title />
          </div>
          <div className="col-md-12" style={{ border: "1px solid red" }}>
            <div id="strepper1" className="bs-stepper">
              {/* En esta seccion va el contenido de los pasos */}
              <div className="bs-strepper-header">
                <div className="step" data-target="#test-1-1">
                  <button className="step-trigger">
                    <span className="bs-stepper-circle">1</span>
                    <span className="bs-stepper-label">Radicar documento</span>
                  </button>
                </div>
                <div className="line" />
                <div className="step" data-target="#test-1-2">
                  <button className="step-trigger">
                    <span className="bs-stepper-circle">2</span>
                    <span className="bs-stepper-label">Sticker</span>
                  </button>
                </div>
                <div className="line" />
                <div className="step" data-target="#test-1-3">
                  <button className="step-trigger">
                    <span className="bs-stepper-circle">3</span>
                    <span className="bs-stepper-label">Adjuntar documento</span>
                  </button>
                </div>
                <div className="line" />
                <div className="step" data-target="#test-1-4">
                  <button className="step-trigger">
                    <span className="bs-stepper-circle">4</span>
                    <span className="bs-stepper-label">Visulizar</span>
                  </button>
                </div>
              </div>
              {/* Fin de la cabecera */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RadicationDocument.propTypes = {};

export default RadicationDocument;
