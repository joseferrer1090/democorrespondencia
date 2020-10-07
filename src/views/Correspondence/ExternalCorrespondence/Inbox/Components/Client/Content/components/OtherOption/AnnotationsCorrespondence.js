import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { TableHeaderColumn, BootstrapTable } from "react-bootstrap-table";
import "./../../../../../../../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

const dataTableAnotation = [
  {
    id: 1,
    fecha: "04/10/2018 - 09:10:16	",
    origen: "Dependencia nombre",
    destinatario: "Dependencia - nombre",
    pagina: 2,
    anotacion: "Descripcion de la anotacion",
  },
  {
    id: 2,
    fecha: "04/10/2018 - 09:10:16	",
    origen: "Dependencia nombre",
    destinatario: "Dependencia - nombre",
    pagina: 3,
    anotacion: "Descripcion de la anotacion",
  },
  {
    id: 3,
    fecha: "04/10/2018 - 09:10:16	",
    origen: "Dependencia nombre",
    destinatario: "Dependencia - nombre",
    pagina: 4,
    anotacion: "Descripcion de la anotacion",
  },
  {
    id: 4,
    fecha: "04/10/2018 - 09:10:16	",
    origen: "Dependencia nombre",
    destinatario: "Dependencia - nombre",
    pagina: 5,
    anotacion: "Descripcion de la anotacion",
  },
  {
    id: 5,
    fecha: "04/10/2018 - 09:10:16	",
    origen: "Dependencia nombre",
    destinatario: "Dependencia - nombre",
    pagina: 6,
    anotacion: "Descripcion de la anotacion",
  },
];

class AnnotationsCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.annotationmodal,
      data: "",
    };
  }

  componentDidMount() {
    this.setState({
      data: dataTableAnotation,
    });
  }

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <Modal className="modal-xl" isOpen={this.state.modal} fade={false}>
        <ModalHeader>Anotaciones adicionales a la correspondencia</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-12">
              <BootstrapTable
                data={this.state.data}
                options={{ noDataText: "No hay datos !!!" }}
                className="table-striped table-hover table-condensed table-sm"
                bordered={false}
                search
                searchPlaceholder="Buscar"
                pagination
              >
                <TableHeaderColumn
                  dataField="id"
                  dataAlign="center"
                  isKey={true}
                  width={"60"}
                >
                  #
                </TableHeaderColumn>
                <TableHeaderColumn dataField="fecha" dataAlign="center">
                  Fecha
                </TableHeaderColumn>
                <TableHeaderColumn dataField="origen" dataAlign="center">
                  Origen
                </TableHeaderColumn>
                <TableHeaderColumn dataField="destinatario" dataAlign="center">
                  {" "}
                  Destinatario{" "}
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="pagina"
                  dataAlign="center"
                  width={"60"}
                >
                  Página
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="anotacion"
                  dataAlign="center"
                  width={300}
                >
                  Anotación
                </TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => {
              this.setState({ modal: false });
            }}
          >
            {" "}
            <i className="fa fa-times" />
            Cerrar
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

AnnotationsCorrespondence.propTypes = {
  annotationmodal: PropTypes.bool.isRequired,
};

export default AnnotationsCorrespondence;
