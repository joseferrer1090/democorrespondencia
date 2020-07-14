import React, { Component } from "react";
import PropTypes from "prop-types";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "./../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
import TableListStickers from "./components/TableListStickers";

const dataExample = [
  {
    id: 1,
    stickername: "Sticker de correspondencia interna",
    description: "Configuracion del sticker de correspondencia interna",
    status: true,
  },
  {
    id: 2,
    stickername: "Sticker de correspondencia externa",
    description: "Configuracion del sticker de correspondencia externa",
    status: true,
  },
  {
    id: 3,
    stickername: "Sticker de correspondencia",
    description: "Configuracion del sticker de correspondencia",
    status: true,
  },
];

class Sticker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  AccionesTableSticker(cell, row) {
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm"
          title="Editar valores del sticker"
        >
          <i className="fa fa-pencil" />
        </button>
      </div>
    );
  }

  EstadoSticker(cell, row) {
    let status;
    if (row.status) {
      status = <b className="text-success"> Activado</b>;
    } else {
      status = <b className="text-danger">Inactivador</b>;
    }
    return status;
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-secondary" role="alert">
              <h4 className="alert-heading">Configuracion de Sticker</h4>
              <p className="text-justify">
                Puedes configurar los Sticker de las deferentes correspondencias
                y modificar los datos que estos muestran en cada uno de ellos.
              </p>
              <hr />
              <p className="mb-0">
                Debe tener en cuenta los valores que se van a mostrar en el
                sticker.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <TableListStickers />
          </div>
        </div>
      </div>
    );
  }
}
export default Sticker;
