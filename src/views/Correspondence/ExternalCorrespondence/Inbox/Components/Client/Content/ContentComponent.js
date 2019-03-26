import React, { Component } from "react";
import PropTypes from "prop-types";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main
        role="main"
        class="col-md-9 ml-sm-auto col-lg-10 px-4"
        style={{ border: "1px solid green" }}
      >
        <p>Content component</p>
      </main>
    );
  }
}

ContentComponent.propTypes = {};

export default ContentComponent;
