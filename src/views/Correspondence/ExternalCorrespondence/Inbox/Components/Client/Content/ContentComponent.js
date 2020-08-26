import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import Data2 from "./../../../../../../../services/data_inbox_extern.json";
import "./components/css/table_inbox.css";
import "./components/css/TableInboxFixed.css";
import "./../../../../../../../css/ContentComponentExternalCorrespondence.css";
import moment from "moment";
import {
  EXTERNAL_CORRESPONDENCE_RECEIVED,
  EXTERNAL_CORRESPONDENCE_PAGINATION,
} from "../../../../../../../services/EndPoints";
import { connect } from "react-redux";
import { dataCorrespondence } from "./../../../../../../../actions/dataCorrespondenceExternalAction";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.datacorrespondence,
      dropdownOpen: false,
      term: "",
      tblData: "",
      chkrow: false,
      checkall: false,
      idCorrespondenceSelected: null,
      dataInbox: [],
      auth: this.props.authorization,
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
    console.log(this.props.content);
    console.log(this.props.pending);
  }

  getInformation = () => {
    this.props.getData();
  };

  render() {
    const { data } = this.state;
    const { content, pending } = this.props;
    // console.log(pending);
    console.log(this.props);
    console.log(data);

    const aux = Object.keys(data).length ? "Datos" : "No datos";

    return <div>{aux}</div>;
  }
}

ContentComponent.propTypes = {};

const mapState = (state) => {
  return {
    content: state.dataCorrespondenceExternal.received,
    pending: state.dataCorrespondenceExternal.pending,
    allcontent: state.dataCorrespondenceExternal.alldata,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getData: () => {
      dispatch(dataCorrespondence());
    },
  };
};

export default connect(mapState, mapDispatch)(ContentComponent);
