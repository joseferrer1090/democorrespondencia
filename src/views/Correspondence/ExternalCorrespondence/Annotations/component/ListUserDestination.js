import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteUserListDestination } from "./../../../../../actions/anottationsActions";

class ListUserDestination extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  delUserlist = (id) => {
    this.props.deleteUser(id);
  };

  render() {
    const { listuserdestination } = this.props;
    return (
      <div>
        {Object.keys(listuserdestination).length ? (
          listuserdestination.map((aux, id) => {
            return (
              <div>
                {aux.id} - {aux.name}{" "}
                <i
                  className="fa fa-times"
                  onClick={() => this.delUserlist(aux.id)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            );
          })
        ) : (
          <div>No hay usuario agregados</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listuserdestination: state.dataAnottationsReducers.dataUserListSelect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id) => {
      dispatch(deleteUserListDestination(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUserDestination);
