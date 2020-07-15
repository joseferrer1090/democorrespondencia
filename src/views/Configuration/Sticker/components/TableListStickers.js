import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Card, CardBody } from "reactstrap";
import { obtenerStickers } from "./../../../../actions/stickerActions";

import moment from "moment";
import "./../../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import ModalViewSticker from "./ModalViewSticker";

class TableListSticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalview: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.sendTheAlert();
  };
  ModalViewSticker(id) {
    this.ModalView.toggle(id);
  }

  AccionesTableSticker(cell, row) {
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm"
          title="Ver informacion del sticker"
          onClick={() => this.ModalViewSticker(row.id)}
        >
          <i className="fa fa-eye" />
        </button>
        &nbsp;
        <button
          className="btn btn-secondary btn-sm"
          title="Editar valores del sticker"
          onClick={() =>
            window.location.replace(
              `/#/correspondence/configuration/sticker/edit/${row.id}`
            )
          }
        >
          <i className="fa fa-pencil" />
        </button>
      </div>
    );
  }
  FechaSticker(cell, row) {
    let createdAt;
    createdAt = new Date(row.createdAt);
    return moment(createdAt).format("DD-MM-YYYY");
  }

  render() {
    return (
      <div className="fadeIn">
        <Card body>
          <BootstrapTable
            data={this.props.stickers}
            pagination
            search
            searchPlaceholder="Buscar"
            hover
            striped
            bordered={false}
          >
            <TableHeaderColumn isKey dataField={"id"} hidden>
              ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField={"code"} dataAlign="center">
              ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataAlign="center">
              Nombre
            </TableHeaderColumn>
            <TableHeaderColumn dataField="description" dataAlign="center">
              Descripcion
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField={"createdAt"}
              dataAlign="center"
              dataFormat={(cell, row) => this.FechaSticker(cell, row)}
            >
              Fecha de creacion
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField={"updatedAt"}
              dataAlign="center"
              dataFormat={(cell, row) => this.FechaSticker(cell, row)}
            >
              Fecha de modificacion
            </TableHeaderColumn>
            <TableHeaderColumn
              dataAlign="center"
              dataFormat={(cell, row) => this.AccionesTableSticker(cell, row)}
            >
              Acciones
            </TableHeaderColumn>
          </BootstrapTable>
        </Card>
        <ModalViewSticker
          modalview={this.state.modalview}
          ref={(mvs) => {
            this.ModalView = mvs;
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stickers: state.stickerReducer.stickers,
  };
}

function mapDispatch(dispatch) {
  return {
    sendTheAlert: () => {
      dispatch(obtenerStickers());
    },
  };
}

TableListSticker.propTypes = {};

export default connect(mapStateToProps, mapDispatch)(TableListSticker);
