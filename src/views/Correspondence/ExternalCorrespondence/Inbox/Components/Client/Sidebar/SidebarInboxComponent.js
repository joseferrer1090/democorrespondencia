import React, { Component } from "react";
import PropTypes from "prop-types";

class SidebarInboxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="col-md-2"
        style={{ border: "2px solid red", height: "540px " }}
      >
        <p>Sidebar Component</p>
      </div>
    );
  }
}

SidebarInboxComponent.propTypes = {};

export default SidebarInboxComponent;
