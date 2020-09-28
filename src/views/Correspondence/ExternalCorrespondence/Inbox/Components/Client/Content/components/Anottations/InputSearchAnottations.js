import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterDataAnottation } from "./../../../../../../../../../actions/anottationsActions";

class InputSearchAnottations extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const { valuesearch } = this.props;
    return (
      <div>
        <input
          type="search"
          className="form-control form-control-sm"
          value={valuesearch}
          style={{
            borderRadius: "10px",
            textDecoration: "inherit",
            fontFamily: "FontAwesome, Helvetica Neue",
            fontStyle: "normal",
            fontWeight: "normal",
          }}
          placeholder="&#xF002; Buscar Anotacion"
          onChange={(e) => this.props.filterData(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { valuesearch: state.dataAnottationsReducers.valuesearch };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterData: (data) => {
      dispatch(filterDataAnottation(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputSearchAnottations);
