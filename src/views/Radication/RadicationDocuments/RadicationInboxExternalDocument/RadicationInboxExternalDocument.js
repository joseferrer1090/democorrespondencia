import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderComponent from "./../../../Correspondence/ExternalCorrespondence/Inbox/Components/Client/Header/HeaderInbox";
import "bs-stepper/dist/css/bs-stepper.css";
import Stepper from "bs-stepper";
import Title from "../Components/Steps/Title";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";

class RadicationInboxExternalDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.stepper = new Stepper(document.querySelector("#stepper"), {
      linear: false,
      animation: true
    });
  }
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="card card-body">
          <div className="row">
            <div className="col-md-12">
              <Title title="Radicacion de correspondencia externa entrante" />
            </div>
            <div className="col-md-12">
              <div id="stepper" className="bs-stepper">
                <div className="bs-stepper-header">
                  <div className="step" data-target="#test-l-1">
                    <button className="step-trigger">
                      <span className="bs-stepper-circle">1</span>
                      <span className="bs-stepper-label">
                        Radicar documento
                      </span>
                    </button>
                  </div>
                  <div className="line" />
                  <div className="step" data-target="#test-l-2">
                    <button className="step-trigger">
                      <span className="bs-stepper-circle">2</span>
                      <span className="bs-stepper-label">Sticker</span>
                    </button>
                  </div>
                  <div className="line" />
                  <div className="step" data-target="#test-l-3">
                    <button className="step-trigger">
                      <span className="bs-stepper-circle">3</span>
                      <span className="bs-stepper-label">
                        Adjuntar documento
                      </span>
                    </button>
                  </div>
                  <div className="line" />
                  <div className="step" data-target="#test-l-4">
                    <button className="step-trigger">
                      <span className="bs-stepper-circle">4</span>
                      <span className="bs-stepper-label">Visualizar</span>
                    </button>
                  </div>
                </div>
                <div className="bs-stepper-content">
                  <form onSubmit={this.onSubmit}>
                    <div id="test-l-1" className="content">
                      <Step1 />
                      <div className="col-md-6 offset-1">
                        <button
                          type={"button"}
                          className="btn btn-secondary "
                          onClick={() => this.stepper.next()}
                        >
                          Siguiente <i className="fa fa-angle-right" />
                        </button>
                      </div>
                    </div>
                    <div id="test-l-2" className="content">
                      <Step2 />
                      <button
                        type={"button"}
                        className="btn btn-secondary "
                        onClick={() => this.stepper.next()}
                      >
                        Siguiente <i className="fa fa-angle-right" />
                      </button>
                    </div>
                    <button
                      type={"button"}
                      className="btn btn-primary"
                      onClick={() => this.stepper.previous()}
                    >
                      &gt;Next
                    </button>

                    <div id="test-l-3" className="content ">
                      <Step3 />
                    </div>
                    <div id="test-l-4" className="content text-center">
                      <button type="submit" className="btn btn-primary mt-5">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RadicationInboxExternalDocument.propTypes = {};

export default RadicationInboxExternalDocument;
