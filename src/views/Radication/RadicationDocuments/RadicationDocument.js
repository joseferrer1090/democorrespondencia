import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderComponent from "./Components/Header/HeaderInbox";

class RadicationDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <HeaderComponent />
      </div>
    );
  }
}

RadicationDocument.propTypes = {};

export default RadicationDocument;
