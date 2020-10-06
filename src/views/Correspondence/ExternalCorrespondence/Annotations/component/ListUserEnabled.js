import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  loadUserListDependence,
  loadUserListByGroup,
  addUserListDestination,
} from "./../../../../../actions/anottationsActions";

class ListUserEnabled extends Component {
  constructor(props) {
    super();
    this.state = {
      iddependencia: props.dependencia,
      idgroup: props.grupo,
    };
  }

  static getDerivedStateFromProps(state, props) {
    if (props.dependencia !== state.iddependencia) {
      return {
        iddependencia: props.dependencia,
      };
    } else if (props.grupo !== state.idgroup) {
      return {
        idgroup: props.grupo,
      };
    } else if (props.grupo === state.idgroup || props.grupo === undefined) {
      return null;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.dependencia !== prevProps.dependencia) {
      this.getDataListDependence(this.props.dependencia);
    }

    if (this.props.grupo !== prevProps.grupo) {
      this.getDataListaByGroup(this.props.grupo);
    }

    return null;
  }

  getDataListDependence = (id) => {
    if (id === undefined || id === "") {
      return null;
    } else {
      this.props.getDataUserDependence(id);
    }
  };

  getDataListaByGroup = (id) => {
    if (id === undefined || id === "") {
      return null;
    } else {
      this.props.getDataUserByGroup(id);
    }
  };

  adduserlist = (id) => {
    this.props.adduser(id);
  };

  render() {
    const { datauserlist } = this.props;
    const datalist = (data) => {
      return (
        <div>
          <table className="table table-sm">
            <tbody>
              {data.map((aux, id) => {
                return (
                  <tr key={id}>
                    <td>{aux.name}</td>
                    <td>
                      <i
                        className="fa fa-plus"
                        style={{ color: "green", cursor: "pointer" }}
                        onClick={() => this.adduserlist(aux)}
                      />
                      {/* <button
                        title="Agregar a la lista"
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => this.adduserlist(aux)}
                      >
                        <i className="fa fa-plus" />
                      </button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    };
    return (
      <div>
        {Object.keys(datauserlist).length ? (
          datalist(datauserlist)
        ) : (
          <p>No hay usuarios disponibles</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    datauserlist: state.dataAnottationsReducers.dataUserList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataUserDependence: (id) => {
      dispatch(loadUserListDependence(id));
    },
    getDataUserByGroup: (id) => {
      dispatch(loadUserListByGroup(id));
    },
    adduser: (data) => {
      dispatch(addUserListDestination(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUserEnabled);
