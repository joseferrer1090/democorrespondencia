import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderComponent from "./../../../Correspondence/ExternalCorrespondence/Inbox/Components/Client/Header/HeaderInbox";
import "bs-stepper/dist/css/bs-stepper.css";
import Stepper from "bs-stepper";
import Title from "../Components/Steps/Title";
import FormCreateStep1 from "./Components/Steps/Step1";
import Step2 from "./Components/Steps/Step2";
import Step3 from "./Components/Steps/Step3";
import Step4 from "./Components/Steps/Step4";
import { SEARCH_BY_USERNAME } from "../../../../services/EndPoints";
import { decode } from "jsonwebtoken";

const asyncLocalStorage = {
  setItem: async function (key, value) {
    await null;
    return localStorage.setItem(key, value);
  },
  getItem: async function (key) {
    await null;
    return localStorage.getItem(key);
  },
};
class RadicationInboxExternalDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: "",
      data: [],
      headquarter: {},
    };
  }

  componentDidMount() {
    this.getDataLocal();
    this.functionStep();
  }

  functionStep = () => {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true,
      displayNext: false,
      displayPrevious: false,
    });
  };

  getDataLocal = () => {
    asyncLocalStorage.getItem("auth_token").then((resp) => {
      // console.log(resp);
      this.getInfoUser(resp);
      this.setState({
        authToken: resp,
        headquarter: decode(resp),
      });
    });
  };

  getInfoUser = (auth) => {
    const username = decode(auth);
    fetch(`${SEARCH_BY_USERNAME}/?username=${username.user_name}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + auth,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.name);
        this.setState({
          data: data.name,
        });
      })
      .catch((Error) => console.log(" ", Error));
  };

  render() {
    const { authToken, data, headquarter } = this.state;

    return (
      <div>
        <HeaderComponent />
        <div className="card card-body">
          <div className="row">
            <div className="col-md-12">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  this.props.history.goBack();
                }}
                title="atras"
              >
                {" "}
                <i className="fa fa-arrow-left" />{" "}
              </button>{" "}
              <Title title="Radicacion de correspondencia externa entrante" />
            </div>
            <div className="col-md-12">
              <div id="stepper1" className="bs-stepper">
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
                      <FormCreateStep1
                        authorization={authToken}
                        nameUserFiling={data}
                        headquarterFiling={headquarter.headquarter}
                      />

                      {/* <div className="col-md-6 offset-1">
                        <button
                          type={"button"}
                          className="btn btn-secondary "
                          onClick={() => this.stepper.next()}
                        >
                          Siguiente <i className="fa fa-angle-right" />
                        </button>
                      </div> */}
                    </div>
                    <div id="test-l-2" className="content">
                      <Step2 />

                      {/* <button
                        type={"button"}
                        className="btn btn-secondary "
                        onClick={() => this.stepper.next()}
                      >
                        Siguiente <i className="fa fa-angle-right" />
                      </button> */}
                    </div>

                    {/* <button
                      type={"button"}
                      className="btn btn-primary"
                      onClick={() => this.stepper.previous()}
                    >
                      &gt;Next
                    </button> */}
                    <div id="test-l-3" className="content ">
                      <Step3 />
                    </div>
                    <div id="test-l-4" className="content">
                      <Step4 />
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
