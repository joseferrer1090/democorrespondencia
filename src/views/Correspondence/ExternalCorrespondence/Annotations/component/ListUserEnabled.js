import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ListUserEnabled extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>Lista de usuarios disponibles</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(ListUserEnabled);
