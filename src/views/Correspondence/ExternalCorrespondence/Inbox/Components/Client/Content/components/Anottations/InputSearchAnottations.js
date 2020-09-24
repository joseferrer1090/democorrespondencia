import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class InputSearchAnottations extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <input
          type="search"
          className="form-control form-control-sm"
          //value={}
          style={{
            borderRadius: "10px",
            textDecoration: "inherit",
            fontFamily: "FontAwesome, Helvetica Neue",
            fontStyle: "normal",
            fontWeight: "normal",
          }}
          placeholder="&#xF002; Buscar correspondencia"
          //onChange={(e) => this.props.filterdata(e.target.value)}
        />
      </div>
    );
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
