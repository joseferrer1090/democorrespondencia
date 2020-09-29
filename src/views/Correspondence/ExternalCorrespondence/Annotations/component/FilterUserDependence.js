import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  loadDataConglomeradoSelect,
  dataSelectedConglomerado,
  loadDataEmpresa,
  dataSelectedEmpresaValue,
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
    const {
      dataconglomerado,
      valueconglomerado,
      dataempresa,
      valueempresa,
    } = this.props;
    //console.log(dataconglomerado);
    console.log(dataempresa);
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Conglomerado</label>
              <select
                className="form-control form-control-sm"
                value={valueconglomerado}
                onChange={(e) => {
                  this.props.onchangeselect(e.target.value);
                  this.props.dataEmpresa(e.target.value);
                }}
              >
                <option value="">Seleccione ...</option>
                {dataconglomerado.map((aux, id) => (
                  <option key={id} value={aux.id}>
                    {aux.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Empresa</label>
              <select
                className="form-control form-control-sm"
                value={valueempresa}
                onChange={(e) => {
                  this.props.onChangeselectectempresa(e.target.value);
                }}
              >
                <option value="">Seleccione...</option>
                {dataempresa.map((aux, id) => (
                  <option key={id} value={aux.id}>
                    {aux.name}
                  </option>
                ))}
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
    dataempresa: state.dataAnottationsReducers.dataEmpresa,
    valueempresa: state.dataAnottationsReducers.valueempresa,
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
    dataEmpresa: (id) => {
      dispatch(loadDataEmpresa(id));
    },
    onChangeselectectempresa: (data) => {
      dispatch(dataSelectedEmpresaValue(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterUserDependence);
