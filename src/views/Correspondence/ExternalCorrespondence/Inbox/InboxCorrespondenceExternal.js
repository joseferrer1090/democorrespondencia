import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import "./../../../../assets/css/custom.css";

class InboxCorrespondenceExternal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row" style={{ marginTop: "-25px" }}>
          <div className="col-md-12" style={{ border: "1px solid black" }}>
            <p>Header Component</p>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-2"
            style={{ border: "2px solid red", height: "540px " }}
          >
            <p>Sidebar component</p>
          </div>
          <main
            role="main"
            class="col-md-9 ml-sm-auto col-lg-10 px-4"
            style={{ border: "1px solid green" }}
          >
            <p>Content component</p>
          </main>
        </div>
      </div>
    );
  }
}

InboxCorrespondenceExternal.propTypes = {};

export default InboxCorrespondenceExternal;
