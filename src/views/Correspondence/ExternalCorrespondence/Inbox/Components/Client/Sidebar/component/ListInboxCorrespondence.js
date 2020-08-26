import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import Tags from "./TagViewer";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  dataCorrespondencePending,
  dataCorrespondence,
} from "./../../../../../../../../actions/dataCorrespondenceExternalAction";

class ListInboxCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const getDataP = () => {
      this.props.getDataPending();
    };
    const getDataC = () => {
      this.props.getDataCurrently();
    };
    return (
      <div style={{ padding: "0" }}>
        <ListGroup>
          {/* <ListGroupItem>
            <form>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Buscar correspondencia"
              />
            </form>
          </ListGroupItem> */}
          <ListGroupItem
            className=""
            tag="button"
            action
            onClick={() => {
              alert("probando");
            }}
          >
            {" "}
            Actualizar{" "}
            <Badge className="float-right" pill>
              {" "}
              <i className="fa fa-refresh" />{" "}
            </Badge>{" "}
          </ListGroupItem>
          <ListGroupItem className="" tag="button" action onClick={getDataC}>
            {" "}
            Entrada{" "}
            <Badge pill className="float-right  badge-info">
              0{" "}
            </Badge>{" "}
          </ListGroupItem>
          <ListGroupItem className="" tag="button" action onClick={getDataP}>
            {" "}
            Pendiente{" "}
            <Badge pill className="float-right  badge-danger  ">
              {" "}
              0{" "}
            </Badge>{" "}
          </ListGroupItem>
          <ListGroupItem className="" tag="button" action>
            <Link to="/correspondence/external/consult">
              {" "}
              Consultar{" "}
              <Badge pill className="float-right">
                {" "}
                <i className="fa fa-search" />{" "}
              </Badge>{" "}
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Tags />
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

ListInboxCorrespondence.propTypes = {};

const mapState = (state) => {
  return {
    current: state.dataCorrespondenceExternal.received,
    pending: state.dataCorrespondenceExternal.pending,
    totalcurrently: state.dataCorrespondenceExternal.totalElements,
    totalPendig: state.dataCorrespondenceExternal.totalElements,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getDataPending: () => {
      dispatch(dataCorrespondencePending());
    },
    getDataCurrently: () => {
      dispatch(dataCorrespondence());
    },
  };
};

export default connect(mapState, mapDispatch)(ListInboxCorrespondence);
