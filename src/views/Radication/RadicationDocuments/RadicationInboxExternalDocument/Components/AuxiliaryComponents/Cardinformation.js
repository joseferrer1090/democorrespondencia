import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import { stat } from "fs";

class Cardinformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      id: this.props.selectedItem
    };
  }

  getUserById = id => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
    console.log(this.state.data);
  };

  static getDerivedStateFormProps(state, props) {
    console.log(this.props.selectedItem);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <div className="p-2 mb-1 bg-secondary text-dark">
            Datos del remitente
          </div>
          <CardBody>
            <div className="row">
              <div className="col-md-4">
                <div className="">
                  <dt>Identificación</dt>
                  <dd>Probando</dd>
                </div>
              </div>
              <div className="col-md-4">
                <div className="">
                  <dt>Nombre</dt>
                  <dd>Probando</dd>
                </div>
              </div>
              <div className="col-md-4">
                <div className="">
                  <dt>Observación</dt>
                  <dd>Probando</dd>
                </div>
              </div>
              <div className="col-md-4">
                <div className="">
                  <dt>Dirección</dt>
                  <dd>Probando</dd>
                </div>
              </div>
              <div className="col-md-4">
                <div className="">
                  <dt>Telefóno fijo</dt>
                  <dd>Probando</dd>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <dt>Telefóno celular</dt>
                  <dd>Probando</dd>
                </div>
              </div>
              <div className="col-md-4">
                <div className="">
                  <dt>Ciudad</dt>
                  <dd>Probando</dd>
                </div>
              </div>
              <div className="col-md-4">
                <div className="">
                  <dt>Correo electronico</dt>
                  <dd>Probando</dd>
                </div>
              </div>
              <div className="col-md-4">
                <div className="">
                  <dt>Referencia</dt>
                  <dd>Probando</dd>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

Cardinformation.propTypes = {
  selectedItem: PropTypes.string.isRequired
};

export default Cardinformation;
