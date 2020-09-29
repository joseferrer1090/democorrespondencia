import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class FilterUserGroup extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <p>Probando</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(FilterUserGroup);
