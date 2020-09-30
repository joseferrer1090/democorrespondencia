import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  loadDataSelectGroupUsers,
  selectedGroupUser,
} from "./../../../../../actions/anottationsActions";

class FilterUserGroup extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.dataGroup();
  }

  render() {
    const { dataGroupUsers, datagroupuserselected } = this.props;
    return (
      <div>
        <div className="form-group">
          <label>Grupo de usuario</label>
          <select
            className="form-control form-control-sm"
            value={datagroupuserselected}
            onChange={(e) => {
              this.props.onChangeSelectGroupUser(e.target.value);
            }}
          >
            <option value="">Seleccione el grupo</option>
            {dataGroupUsers.map((aux, id) => (
              <option key={id} value={aux.id}>
                {aux.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataGroupUsers: state.dataAnottationsReducers.dataGroupUsers,
    datagroupuserselected: state.dataAnottationsReducers.datagroupuserselected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dataGroup: () => {
      dispatch(loadDataSelectGroupUsers());
    },
    onChangeSelectGroupUser: (data) => {
      dispatch(selectedGroupUser(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterUserGroup);
