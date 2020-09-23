import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ContentPending extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return <div>probando apenas</div>;
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(ContentPending);
