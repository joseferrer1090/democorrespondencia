import React, { Component } from "react";
import PropTypes from "prop-types";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("Render");
    return (
      <div>
        <p>Estoy organizando el proyecto</p>

      </div>
    );
  }
}

index.propTypes = {};

export default index;
