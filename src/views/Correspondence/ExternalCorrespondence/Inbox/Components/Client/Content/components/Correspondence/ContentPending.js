import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import InputSearch from "./../../InputSearch";

class ContentPending extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    console.log(this.props);
    return <div>probando apenas</div>;
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(ContentPending);
