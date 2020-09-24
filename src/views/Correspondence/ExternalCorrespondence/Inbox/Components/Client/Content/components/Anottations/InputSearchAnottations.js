import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class InputSearchAnottations extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputSearchAnottations);
