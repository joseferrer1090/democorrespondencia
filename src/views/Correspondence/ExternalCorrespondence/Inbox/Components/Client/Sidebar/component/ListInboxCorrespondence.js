import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import Tags from "./TagViewer";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class ListInboxCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
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
          <ListGroupItem className="" tag="button" action>
            {" "}
            Entrada{" "}
            <Badge pill className="float-right  badge-info">
              {" "}
              1{" "}
            </Badge>{" "}
          </ListGroupItem>
          <ListGroupItem className="" tag="button" action>
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

export default ListInboxCorrespondence;
