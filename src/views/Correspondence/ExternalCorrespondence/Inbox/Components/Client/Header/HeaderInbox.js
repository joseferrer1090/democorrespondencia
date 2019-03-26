import React, { Component } from "react";
import { CommandBar } from "office-ui-fabric-react";
import PropTypes from "prop-types";

class Headerinbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-md-12" style={{ border: "1px solid black" }}>
        <p>Component header</p>
      </div>
    );
  }
}

Headerinbox.propTypes = {};

export default Headerinbox;
