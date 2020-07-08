import React, { Component } from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  CardBody,
} from "reactstrap";
import "./css/list.css";

class Sticker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-warning">
              <i className="fa fa-exclamation-triangle" /> Los valores presente
              son los posibles que va a estaran disponibles en el sticker de la
              correspondencia
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder={`Buscar la propiedad asignar al sticker`}
                />
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">probando</li>
                  <li className="list-group-item">probando</li>
                  <li className="list-group-item">probando</li>
                  <li className="list-group-item">probando</li>
                  <li className="list-group-item">probando</li>
                  <li className="list-group-item">probando</li>
                  <li className="list-group-item">probando</li>
                  <li className="list-group-item">probando</li>
                  <li className="list-group-item">probando</li>
                  <li className="list-group-item">probando</li>
                  <li className="list-group-item">probando</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <p>Drop</p>
            <Card>
              <CardBody>
                <div className="row">
                  <p>Los datos mas el orden</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ border: "1px solid red" }}>
            <p>Probando apenas</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Sticker;
