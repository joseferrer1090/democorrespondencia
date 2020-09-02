import React, { Component } from "react";
import { connect } from "react-redux";
import { filterData } from "./../../../../../../../actions/dataCorrespondenceExternalAction";

class InputSearch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { valuesearch } = this.props;
    console.log(this.props);
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
          placeholder="&#xF002; Buscar correspondencia"
          onChange={(e) => this.props.filterdata(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { valuesearch: state.dataCorrespondenceExternal.valuesearch };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterdata: (data) => {
      dispatch(filterData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
