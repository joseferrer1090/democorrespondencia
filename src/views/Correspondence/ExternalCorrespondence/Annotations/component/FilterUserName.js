import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class FilterUserName extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <label>Nombre del usuario</label>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="nombre del usuario"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(FilterUserName);
