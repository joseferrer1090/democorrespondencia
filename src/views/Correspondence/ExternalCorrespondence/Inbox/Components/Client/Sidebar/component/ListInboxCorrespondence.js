import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Badge, Collapse } from "reactstrap";
import Tags from "./TagViewer";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  dataCorrespondencePending,
  dataCorrespondence,
  dataNumerReceived,
  dataNumberPending,
  loadcountcorrespondence,
  loadcountpending,
} from "./../../../../../../../../actions/dataCorrespondenceExternalAction";

import {
  loadNumberAnottations,
  loadDataAnottations,
} from "./../../../../../../../../actions/anottationsActions";

class ListInboxCorrespondence extends Component {
  constructor(props) {
    super();
    this.state = {
      active: {
        active2: true,
        active3: false,
        active4: false,
      },
      collapse: true,
      currentPage: 1,
      userselect: 0,
    };
  }

  getNumberR = () => {
    this.props.getNumberReceived();
  };

  getNumberP = () => {
    this.props.getNumberPending();
  };

  getNunmerA = () => {
    this.props.getNumberAnottation();
  };

  componentDidMount() {
    this.getNumberR();
    this.getNumberP();
    this.getNunmerA();
    this.props.getcount();
    this.props.getcountp();
  }

  render() {
    const { currentPage } = this.state;
    const { countanottations, countpending, countreceived } = this.props;

    const getDataP = () => {
      this.props.getDataPending();
      this.setState({
        ...this.state,
        active: {
          ...this.state,
          active3: true,
        },
      });
    };

    const getDataC = (props) => {
      this.props.getDataCurrently(currentPage);
      this.setState({
        ...this.state,
        active: {
          ...this.state,
          active2: true,
        },
      });
    };

    const getDataA = (props) => {
      this.props.getDataAnottations();
      this.setState({
        ...this.state,
        active: {
          ...this.state,
          active4: true,
        },
      });
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
          {/* <ListGroupItem className="" tag="button" action>
            {" "}
            Actualizar{" "}
            <Badge className="float-right" pill>
              {" "}
              <i className="fa fa-refresh" />{" "}
            </Badge>{" "}
          </ListGroupItem> */}
          <ListGroupItem
            className=""
            tag="button"
            action
            onClick={getDataC}
            active={this.state.active.active2}
          >
            {" "}
            Entrada
            <Badge pill className="float-right  badge-info">
              {countreceived}
            </Badge>{" "}
          </ListGroupItem>
          <ListGroupItem
            className=""
            tag="button"
            action
            onClick={(e) => {
              e.preventDefault();
              getDataP();
            }}
            active={this.state.active.active3}
          >
            Pendiente{" "}
            <Badge pill className="float-right  badge-danger">
              {countpending}
            </Badge>{" "}
          </ListGroupItem>
          <ListGroupItem
            onClick={() =>
              this.setState({
                collapse: !this.state.collapse,
              })
            }
            style={{
              background: "#e3e3e3",
            }}
          >
            Novedades
          </ListGroupItem>
          <Collapse isOpen={this.state.collapse}>
            <ListGroup>
              <ListGroupItem
                className=""
                tag="button"
                action
                active={this.state.active.active4}
                onClick={getDataA}
              >
                Anotaciones{" "}
                <Badge pill className="float-right  badge-info  ">
                  {countanottations}
                </Badge>{" "}
              </ListGroupItem>
            </ListGroup>
          </Collapse>
          {/* <ListGroupItem className="" tag="button" action>
            <Link to="/correspondence/external/consult">
              {" "}
              Consultar{" "}
              <Badge pill className="float-right">
                {" "}
                <i className="fa fa-search" />{" "}
              </Badge>{" "}
            </Link>
          </ListGroupItem> */}
          {/* <ListGroupItem>
            <Tags />
          </ListGroupItem> */}
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
    numerorecibidos: state.dataCorrespondenceExternal.numerorecibidas,
    numeropendientes: state.dataCorrespondenceExternal.numeropendientes,
    countanottations: state.dataAnottationsReducers.countanotattions,
    countreceived: state.dataCorrespondenceExternal.countreceived,
    countpending: state.dataCorrespondenceExternal.countpending,
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
    getNumberReceived: () => {
      dispatch(dataNumerReceived());
    },
    getNumberPending: () => {
      dispatch(dataNumberPending());
    },
    getNumberAnottation: () => {
      dispatch(loadNumberAnottations());
    },
    getDataAnottations: () => {
      dispatch(loadDataAnottations());
    },
    getcount: () => {
      dispatch(loadcountcorrespondence());
    },
    getcountp: () => {
      dispatch(loadcountpending());
    },
  };
};

export default connect(mapState, mapDispatch, null)(ListInboxCorrespondence);
