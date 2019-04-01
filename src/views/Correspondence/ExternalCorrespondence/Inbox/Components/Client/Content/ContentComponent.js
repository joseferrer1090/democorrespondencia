import React, { Component } from "react";
import PropTypes from "prop-types";
import Data2 from "./../../../../../../../services/data";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data2.data
    };
  }

  componentDidMount() {
    console.log("Probando el component did mount");
  }

  render() {
    return (
      <main
        role="main"
        className="col-md-10 col-lg-10 col-md-10"
        style={{ border: "1px solid green", padding: "0px" }}
      >
        <p>Probando apenas</p>
      </main>
    );
  }
}

ContentComponent.propTypes = {};

export default ContentComponent;
