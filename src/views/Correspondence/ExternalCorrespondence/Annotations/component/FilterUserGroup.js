import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class FilterUserGroup extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <label>Grupo de usuario</label>
          <select className="form-control form-control-sm">
            <option>Seleccione el grupo</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(FilterUserGroup);
