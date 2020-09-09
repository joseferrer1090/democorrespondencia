import React from "react";
import { connect } from "react-redux";
import { loadpaginationperpage } from "./../../../../../../../actions/dataCorrespondenceExternalAction";
import Pagination from "react-js-pagination";

class CustomPagination extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    // totalItemsCount => El recuento total de los artículos que va a mostrar.
    // onChange => Funcion principal.
    // activePage => pagina activa.
    const { size, totalElements, number } = this.props;

    return (
      <div>
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          itemsCountPerPage={size}
          totalItemsCount={totalElements}
          onChange={this.props.handlePageChange()}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    size: state.dataCorrespondenceExternal.size,
    totalElements: state.dataCorrespondenceExternal.totalElements,
    number: state.dataCorrespondenceExternal.number,
  };
};

const mapDispatch = (dispatch) => {
  return {
    pagination: (page, size) => {
      dispatch(loadpaginationperpage(page, size));
    },
  };
};

export default connect(mapState, mapDispatch)(CustomPagination);
