import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUserListDependence } from "./../../../../../actions/anottationsActions";

class ListUserEnabled extends Component {
  constructor(props) {
    super();
    this.state = {
      iddependencia: props.dependencia,
    };
  }

  static getDerivedStateFromProps(state, props) {
    if (props.dependencia !== state.iddependencia) {
      return {
        iddependencia: props.dependencia,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.dependencia !== prevProps.dependencia) {
      this.getDataListDependence(this.props.dependencia);
    }
    return null;
  }

  getDataListDependence = (id) => {
    this.props.getDataUserDependence(id);
  };

  render() {
    const { datauserlist } = this.props;
    const datalist = (data) => {
      return (
        <div>
          <table className="table table-stripped table-hover">
            <thead>
              {/* <tr>
                <th>Nombre</th>
              </tr> */}
            </thead>
            <tbody>
              {data.map((aux, id) => {
                return (
                  <tr key={id}>
                    <td>{aux.name}</td>
                    <td>
                      <button
                        title="Agregar a la lista"
                        type="button"
                        className="btn btn-secondary btn-sm"
                      >
                        <i className="fa fa-plus" />
                      </button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUserEnabled);
