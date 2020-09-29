import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  loadDataConglomeradoSelect,
  dataSelectedConglomerado,
} from "./../../../../../actions/anottationsActions";

class FilterUserDependence extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.dataConglomerado();
  }

  render() {
    const { dataconglomerado, valueconglomerado } = this.props;
    console.log(dataconglomerado);
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Conglomerado</label>
              <select
                className="form-control form-control-sm"
                value={valueconglomerado}
                onChange={(e) => this.props.onchangeselect(e.target.value)}
              >
                <option value="">Seleccione ...</option>
                {dataconglomerado.map((aux, id) => (
                  <option value={aux.id}>{aux.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Empresa</label>
              <select className="form-control form-control-sm">
                <option>Seleccione</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Sede</label>
              <select className="form-control form-control-sm">
                <option>Seleccione</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Dependencia</label>
              <select className="form-control form-control-sm">
                <option>Seleccione</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataconglomerado: state.dataAnottationsReducers.dataConglomerado,
    valueconglomerado: state.dataAnottationsReducers.valueconglomerado,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dataConglomerado: () => {
      dispatch(loadDataConglomeradoSelect());
    },
    onchangeselect: (data) => {
      dispatch(dataSelectedConglomerado(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterUserDependence);
