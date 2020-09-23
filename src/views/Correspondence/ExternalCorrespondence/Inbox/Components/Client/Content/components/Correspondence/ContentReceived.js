import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ContentReceived extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return <div>Probando el componente de recibidas</div>;
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchTopProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchTopProps)(ContentReceived);
