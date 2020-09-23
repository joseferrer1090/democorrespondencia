import React, { Component } from "react";
import "./components/css/table_inbox.css";
import "./components/css/TableInboxFixed.css";
import "./../../../../../../../css/ContentComponentExternalCorrespondence.css";
import { connect } from "react-redux";
import {
  dataCorrespondence,
  filterData,
  loadPaginationReceived,
  loadPaginationPending,
} from "./../../../../../../../actions/dataCorrespondenceExternalAction";
import InputSearch from "./InputSearch";
import moment from "moment";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import ContentReceived from "./components/Correspondence/ContentReceived";
import ContentPending from "./components/Correspondence/ContentPending";
import ContentAnottations from "./components/Anottations/ContentAnottations";

class ContentComponent extends Component {
  constructor(props) {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state = {
      data: props.datacorrespondence,
      dropdownOpen: false,
      term: "",
      tblData: "",
      chkrow: false,
      checkall: false,
      idCorrespondenceSelected: null,
      auth: props.authorization,
      pageCount: null,
      itemsCountPerPage: 5,
      currentPage: 1,
      totalPages: null,
      totalElements: null,
    };
  }

  static getDerivedStateFromProps(state, props) {
    if (props.datacorrespondence !== state.data) {
      return {
        data: props.datacorrespondence,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.datacorrespondence !== prevState.data) {
      this.setState({
        data: this.props.datacorrespondence,
      });
    }
    return null;
  }

  componentDidMount() {
    this.props.getData();
  }

  toggleCheckboxes = (source, cbName) => {
    for (var i = 0, n = document.getElementsByName(cbName).length; i < n; i++) {
      document.getElementsByName(cbName)[i].checked = source;
    }
  };

  /* PAGINACIÓN */

  validatePagination = (page) => {
    let validationParameter;
    let propsFunction;
    if (this.props.allcontent.length !== 0) {
      this.props.allcontent.map((status, id) => {
        validationParameter = status.statusName;
      });
    }
    if (validationParameter !== "APROBADA") {
      propsFunction = this.props.paginationPending(page);
    } else {
      propsFunction = this.props.paginationReceived(page);
    }
    return propsFunction;
  };

  handlePageChange = (event) => {
    const currentPage = this.props.number;
    let targetPage = event.target.value;
    if (targetPage !== "") {
      this.validatePagination(targetPage);
    } else {
      this.validatePagination(currentPage);
    }
  };

  firstPage = () => {
    const currentPage = this.props.number;
    let firstPage = 1;
    if (currentPage > firstPage) {
      this.validatePagination(firstPage);
      // this.props.pagination(firstPage);
    }
  };

  prevPage = () => {
    const currentPage = this.props.number;
    let prevPage = 1;

    if (currentPage > prevPage) {
      this.validatePagination(currentPage - prevPage);
      // this.props.pagination(currentPage - prevPage);
    }
  };

  lastPage = () => {
    const itemsCountPerPage = this.props.size;
    const totalElements = this.props.totalElements;
    const currentPage = this.props.number;
    let condition = Math.ceil(totalElements / itemsCountPerPage);
    if (currentPage < condition) {
      this.validatePagination(condition);
      // this.props.pagination(condition);
    }
  };

  nextPage = () => {
    const itemsCountPerPage = this.props.size;
    const totalElements = this.props.totalElements;
    const currentPage = this.props.number;
    if (currentPage < Math.ceil(totalElements / itemsCountPerPage)) {
      // this.props.pagination(currentPage + 1);
      this.validatePagination(currentPage + 1);
    }
  };

  /* FIN */
  DateFiling = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };

  colorStatusFiling = (state) => {
    let status;
    if (state === "APROBADA") {
      status = <b style={{ color: "#39a84e" }}>{state}</b>;
    } else if (state === "INICIADO") {
      status = <b style={{ color: "#d6d914" }}>{state}</b>;
    } else if (state === "POR ADJUNTAR") {
      status = <b style={{ color: "#d91427" }}>{state}</b>;
    } else {
      return state;
    }
    return status;
  };

  disabledInput = () => {
    const { number, totalPages } = this.props;
    let disabled = false;
    if (number === totalPages) {
      disabled = true;
    }
    return disabled;
  };

  forceUpdateHandler() {
    this.forceUpdate();
  }

  renderSwitch(param) {
    switch (param) {
      case "RECEIVED":
        return <ContentReceived />;
      case "PENDING":
        return <ContentPending />;
      case "ANOTTATIONS":
        return <ContentAnottations />;
      default:
        return <ContentReceived />;
    }
  }

  render() {
    const example = 8;
    const { data } = this.state;
    const { allcontent, number, totalPages } = this.props;
    const currentPage = this.props.number;

    const aux = Object.keys(data).length ? "Datos" : "No datos";

    const pageNumCss = {
      width: "45px",
      boder: "1px solid #17A2B8",
      color: "#17A2B8",
      textAling: "center",
      fontWeight: "bold",
    };

    const switchCase = () => {
      console.log(this.state.data);
    };

    return (
      <div className="col-md-12 card">
        <div className="card-body">
          <React.Fragment>
            <div className="row">
              <div
                className="col-md-7"
                style={{ padding: 0, marginTop: "20px" }}
              >
                <div className="form-group"> </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-12" style={{ padding: 0 }}>
                {this.renderSwitch(this.props.status)}
              </div>
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

ContentComponent.propTypes = {};

const mapState = (state) => {
  return {
    content: state.dataCorrespondenceExternal.received,
    pending: state.dataCorrespondenceExternal.pending,
    allcontent: state.dataCorrespondenceExternal.alldata,
    size: state.dataCorrespondenceExternal.size,
    totalElements: state.dataCorrespondenceExternal.totalElements,
    number: state.dataCorrespondenceExternal.number,
    valuesearch: state.dataCorrespondenceExternal.valuesearch,
    totalPages: state.dataCorrespondenceExternal.totalPages,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getData: () => {
      dispatch(dataCorrespondence());
    },
    filter: (data) => {
      dispatch(filterData(data));
    },
    paginationReceived(page) {
      dispatch(loadPaginationReceived(page));
    },
    paginationPending(page) {
      dispatch(loadPaginationPending(page));
    },
  };
};

export default connect(mapState, mapDispatch)(ContentComponent);
