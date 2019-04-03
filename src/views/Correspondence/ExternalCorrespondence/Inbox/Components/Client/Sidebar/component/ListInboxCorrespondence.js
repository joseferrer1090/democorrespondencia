import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import Tags from "./TagViewer";

class ListInboxCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem>
            <form>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Buscar correspondencia"
              />
            </form>
          </ListGroupItem>
          <ListGroupItem
            className=""
            tag="button"
            action
            onClick={() => alert("Probando")}
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
            {" "}
            Consultar{" "}
            <Badge pill className="float-right">
              {" "}
              <i className="fa fa-search" />{" "}
            </Badge>{" "}
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
