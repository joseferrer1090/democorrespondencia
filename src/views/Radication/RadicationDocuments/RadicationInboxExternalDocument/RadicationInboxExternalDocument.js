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
import { connect } from "react-redux";
import {
  changeView1,
  changeView2,
  changeView3,
  changeView4,
} from "../../../../actions/controlFilingViews";

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
      step2: "",
    };
  }

  componentDidMount() {
    this.getDataLocal();
    this.functionStep();
    this.props.activeViews(true);
  }

  functionStep = () => {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      // linear: false,
      linear: true,
      animation: true,
      displayNext: false,
      displayPrevious: false,
    });
  };

  getDataLocal = () => {
    asyncLocalStorage.getItem("auth_token").then((resp) => {
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
                onClick={(e) => {
                  this.props.history.goBack();
                  e.preventDefault();
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
                        nextStep={() => this.stepper.next()}
                      />
                    </div>

                    <div id="test-l-2" className="content">
                      <Step2
                        nextStep={() => this.stepper.next()}
                        authorization={authToken}
                      />
                    </div>

                    <div id="test-l-3" className="content ">
                      <Step3
                        nextStep={() => this.stepper.next()}
                        authorization={authToken}
                      />
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

RadicationInboxExternalDocument.propTypes = {
  activeViews: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    step1: state.controlFilingViews.step1,
    step2: state.controlFilingViews.step2,
    step3: state.controlFilingViews.step3,
    step4: state.controlFilingViews.step4,
  };
}
function mapDispatch(dispatch) {
  return {
    activeViews(bool) {
      dispatch(changeView1(bool));
    },
    changeActiveTo2(bool) {
      dispatch(changeView2(bool));
    },
    changeActiveTo3(bool) {
      dispatch(changeView3(bool));
    },
    changeActiveTo4(bool) {
      dispatch(changeView4(bool));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatch,
  null
)(RadicationInboxExternalDocument);
