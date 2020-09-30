import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadDataSelectGroupUsers } from "./../../../../../actions/anottationsActions";

class FilterUserGroup extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.dataGroup();
  }

  render() {
    const { dataGroupUsers } = this.props;
    return (
      <div>
        <div className="form-group">
          <label>Grupo de usuario</label>
          <select className="form-control form-control-sm">
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dataGroup: () => {
      dispatch(loadDataSelectGroupUsers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterUserGroup);
