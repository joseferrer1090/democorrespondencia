import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ListGroup,
  ListGroupItem,
  Badge,
  Collapse,
  UncontrolledCollapse,
} from "reactstrap";
import Tags from "./TagViewer";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  dataCorrespondencePending,
  dataCorrespondence,
  dataNumerReceived,
  dataNumberPending,
} from "./../../../../../../../../actions/dataCorrespondenceExternalAction";

class ListInboxCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: {
        active2: true,
        active3: false,
        active4: false,
      },
      collapse: true,
      currentPage: 1,
    };
  }

  getNumberR = () => {
    this.props.getNumberReceived();
  };

  getNumberP = () => {
    this.props.getNumberPending();
  };

  componentDidMount() {
    this.getNumberR();
    this.getNumberP();
  }

  render() {
    const { currentPage } = this.state;
    console.log(currentPage);
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

    const getDataC = () => {
      this.props.getDataCurrently(currentPage);
      this.setState({
        ...this.state,
        active: {
          ...this.state,
          active2: true,
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
              {this.props.numerorecibidos}
            </Badge>{" "}
          </ListGroupItem>
          <ListGroupItem
            className=""
            tag="button"
            action
            onClick={getDataP}
            active={this.state.active.active3}
          >
            {" "}
            Pendiente{" "}
            <Badge pill className="float-right  badge-danger  ">
              {this.props.numeropendientes}
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
              >
                Anotaciones{" "}
                <Badge pill className="float-right  badge-info  ">
                  0
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
  };
};

export default connect(mapState, mapDispatch, null)(ListInboxCorrespondence);
