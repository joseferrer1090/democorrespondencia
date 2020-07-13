import React, { Component } from "react";
<<<<<<< HEAD
import PropTypes from "prop-types";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "./../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

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
=======
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  CardBody,
} from "reactstrap";
import "./css/list.css";
import TableList from "./components/TableListStickers";
>>>>>>> 961982cf82f1951add0c6f95a359bac039042ae2

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
<<<<<<< HEAD
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
            <div className="card card-body">
              <div className="table-responsive">
                <BootstrapTable
                  data={dataExample}
                  search
                  striped
                  bordered={false}
                  hover
                  condensed
                >
                  <TableHeaderColumn
                    isKey
                    dataAlign={"center"}
                    dataField={"id"}
                  >
                    #
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField={"stickername"}
                    dataAlign="center"
                  >
                    Nombre
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign={"center"}
                    dataField={"description"}
                  >
                    Descripcion
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataAlign={"center"}
                    dataField={"status"}
                    dataFormat={(cell, row) => this.EstadoSticker(cell, row)}
                  >
                    Estado
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    export={false}
                    dataAlign={"center"}
                    dataFormat={(cell, row) =>
                      this.AccionesTableSticker(cell, row)
                    }
                  >
                    Acciones
                  </TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>
=======
      <React.Fragment>
        <div className="row fadeIn">
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
            <Card>
              <CardBody>
                <div className="row">
                  <p>Drop de los datos</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TableList />
          </div>
        </div>
      </React.Fragment>
>>>>>>> 961982cf82f1951add0c6f95a359bac039042ae2
    );
  }
}
export default Sticker;
