import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  onChangeNameUser,
  search,
} from "./../../../../../actions/anottationsActions";

class FilterUserName extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    const { searchusername } = this.props;
    return (
      <div>
        <div className="form-group">
          <label>Nombre del usuario</label>
          <input
            value={searchusername}
            type="text"
            className="form-control form-control-sm"
            placeholder="nombre del usuario"
            onChange={(e) => {
              this.props.onChangeUserName(e.target.value);
              this.props.search(e.target.value);
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchusername: state.dataAnottationsReducers.searchusername,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeUserName: (data) => {
      dispatch(onChangeNameUser(data));
    },
    search: (data) => {
      dispatch(search(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterUserName);
