import React, { Component } from "react";
import PropTypes from "prop-types";

class ModalExport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="animated fadeIn">
        <p>Este es el modal de export</p>
      </div>
    );
  }
}

export default ModalExport;
