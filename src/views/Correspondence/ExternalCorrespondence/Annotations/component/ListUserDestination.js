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
        <table className="table table-sm">
          <tbody>
            {Object.keys(listuserdestination).length ? (
              listuserdestination.map((aux, id) => {
                return (
                  <tr key={id}>
                    <td>{aux.name}</td>
                    <td>
                      <i
                        className="fa fa-times"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => this.delUserlist(aux.id)}
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>No hay usuario agregados</div>
            )}
          </tbody>
        </table>
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
