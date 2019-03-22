import React, { Component } from "react";
import PropTypes from "prop-types";

class InboxCorrespondenceExternal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <p>La vista de bandeja de correspondencia externa</p>
      </div>
    );
  }
}

InboxCorrespondenceExternal.propTypes = {};

export default InboxCorrespondenceExternal;
