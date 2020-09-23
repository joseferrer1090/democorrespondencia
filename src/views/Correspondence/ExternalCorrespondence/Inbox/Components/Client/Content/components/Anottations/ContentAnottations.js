import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputSearch from "./../../InputSearch";

/* Componente que va tener la informacion de las anotaciones y demas funcionalidades relacionadas con ella
 1- Maquetar el componete
 2- Conectar el componente con redux y obtener la data correspondiente
 3- instanciar y relacionar los metodos relacionados con las anotaciones.
 4- Agregar la funcionalidad de la paginacion
 5- Agregar la funcionalidad de la busqueda. 
 6- Probar el componente.

*/

class ContentAnottations extends Component {
  constructor(props) {
    super();
  }
  render() {
    console.log(this.props);
    return <div>Probando apenas el componente</div>;
  }
}

export default ContentAnottations;
