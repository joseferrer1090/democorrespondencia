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
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

  onSubmit(e){
    e.preventDefault();
    alert("Probando apenas");
  }


  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="row">
          <div className="col-md-12" style={{ border: "1px solid green" }}>
            <Title />
          </div>
          <div className="col-md-12">

            <div id="stepper1" className="bs-stepper">
              <div className="bs-stepper-header">
                <div className="step" data-target="#test-l-1">
                  <button className="step-trigger">
                    <span className="bs-stepper-circle">1</span>
                    <span className="bs-stepper-label">Email</span>
                  </button>
                </div>
                <div className="line"/>
                <div className="step" data-target="#test-l-2">
                  <button className="step-trigger">
                    <span className="bs-stepper-circle">2</span>
                    <span className="bs-stepper-label">Password</span>
                  </button>
                </div>
                <div className="line"/>
                <div className="step" data-target="#test-l-3">
                  <button className="step-trigger">
                    <span className="bs-stepper-circle">3</span>
                    <span className="bs-stepper-label">Validate</span>
                  </button>
                </div>
              </div>
              <div className="bs-stepper-content">
                <form onSubmit={this.onSubmit}>
                  <div id="test-l-1" className="content">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                    </div>
                    <button className="btn btn-primary" onClick={() => this.stepper.next()}>&gt;Next</button>
                  </div>
                  <div id="test-l-2" className="content">
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1"
                             placeholder="Password"/>
                    </div>
                    <button className="btn btn-primary" onClick={() => this.stepper.next()}>&gt;Next</button>
                  </div>
                  <div id="test-l-3" className="content text-center">
                    <button type="submit" className="btn btn-primary mt-5">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RadicationDocument.propTypes = {};

export default RadicationDocument;
