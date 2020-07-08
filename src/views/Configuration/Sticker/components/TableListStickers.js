import React, { Component } from "react";
import PropTypes from "prop-types";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Card, CardBody } from "reactstrap";
import "./../../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

const dataExample = [
  {
    id: 1,
    name: "nombre del sticker",
    description: "Valores del sticker",
  },
  {
    id: 2,
    name: "nombre del sticker",
    description: "Valores del sticker",
  },
];

class TableListSticker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(dataExample);
    return (
      <div className="fadeIn">
        <Card>
          <CardBody>
            <BootstrapTable data={dataExample}>
              <TableHeaderColumn isKey dataField={"id"}>
                #
              </TableHeaderColumn>
              <TableHeaderColumn dataField={"name"}>Nombre</TableHeaderColumn>
              <TableHeaderColumn dataField={"description"}>
                Descripcion
              </TableHeaderColumn>
            </BootstrapTable>
          </CardBody>
        </Card>
      </div>
    );
  }
}

TableListSticker.propTypes = {};

export default TableListSticker;
