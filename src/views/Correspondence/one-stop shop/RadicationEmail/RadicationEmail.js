import React, { Component } from "react";
import "./../../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
import ModalViewRadicarionEmail from "./Components/ModalViewRadicationEmail";
import ModalViewFiles from "./Components/ModalViewFiles";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import classnames from "classnames";
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
const dataTable = [
  {
    id: 1,
    fecha: new Date(),
    remitente: "ccuartas@email.com",
    asunto: "Radicación con archivos adjuntos",
    contenido: "Documentos adjuntos"
  },
  {
    id: 2,
    fecha: new Date(),
    remitente: "dhernandez@email.com",
    asunto: "Radicación de documento",
    contenido: "Documentos adjuntos"
  },
  {
    id: 3,
    fecha: new Date(),
    remitente: "smendez@email.com",
    asunto: "Radicación de carta",
    contenido: "Documentos adjuntos"
  },
  {
    id: 4,
    fecha: new Date(),
    remitente: "rcuartas@email.com",
    asunto: "Radicación de memorando",
    contenido: "Documentos adjuntos"
  }
];

class RadicationEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      hiddenColumnID: true,
      modalViewRadicationEmail: false,
      modalviewfiles: false
    };
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  accionesConglomerado(cell, row) {
    return (
      <div
        className="table-actionMenuConglo"
        style={{ textAlign: "center", padding: "0", marginRight: "100px" }}
      >
        <button
          className="btn btn-secondary btn-sm"
          data-trigger="hover"
          onClick={() => {
            this.openModalView(row.id);
          }}
        >
          {" "}
          <i className="fa fa-eye" />{" "}
        </button>
        <button
          className="btn btn-secondary btn-sm"
          data-trigger="hover"
          onClick={() => {
            this.openModalViewFiles(row.id);
          }}
        >
          {" "}
          <i className="fa fa-paperclip" />{" "}
        </button>
      </div>
    );
  }

  openModalView(id) {
    this.refs.child.toggle(id);
  }
  openModalViewFiles(id) {
    this.refs.child2.toggle(id);
  }

  render() {
    const activeTab = this.state.activeTab;
    return (
      <div className="animated fadeIn">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                this.toggleC("1");
              }}
              style={{ fontWeight: "500" }}
            >
              Radicacion de correspondencia externa entrante vía email
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col md="12">
                <div className="table-reponsive">
                  <Row>
                    <Col md="12">
                      <BootstrapTable
                        remote={true} // dudas de como funciona este props para actualizar la data
                        data={dataTable}
                        search
                        hover
                        striped
                        bordered={false}
                        searchPlaceholder={"Buscar"}
                        className="tableConglo tableConglo1 texto-Conglo actionMenuConglo"
                        pagination
                      >
                        <TableHeaderColumn
                          export={false}
                          isKey
                          dataField={"id"}
                          hidden={this.state.hiddenColumnID}
                        />
                        <TableHeaderColumn
                          dataFormat={this.indexN}
                          width={"50"}
                          dataField={"id"}
                          dataAlign="center"
                        >
                          #
                        </TableHeaderColumn>
                        <TableHeaderColumn
                          dataField={"fecha"}
                          dataAlign="center"
                          //   width={"100"}
                        >
                          {" "}
                          Fecha
                        </TableHeaderColumn>
                        <TableHeaderColumn
                          dataField={"remitente"}
                          dataAlign="center"
                          //   width={"205"}
                        >
                          Remitente
                        </TableHeaderColumn>
                        <TableHeaderColumn
                          dataField={"asunto"}
                          dataAlign="center"
                          //   width={"230"}
                        >
                          Asunto
                        </TableHeaderColumn>
                        <TableHeaderColumn
                          dataField={"contenido"}
                          dataAlign="center"
                          //   width={"150"}
                        >
                          Contenido
                        </TableHeaderColumn>
                        <TableHeaderColumn
                          width={"200"}
                          export={false}
                          dataAlign="center"
                          dataFormat={(cell, row) =>
                            this.accionesConglomerado(cell, row)
                          }
                          style={{ border: "none" }}
                        >
                          Acciones
                        </TableHeaderColumn>
                      </BootstrapTable>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        <ModalViewRadicarionEmail
          modalviewradicationemail={this.state.modalViewRadicationEmail}
          ref="child"
        />
        <ModalViewFiles
          modalviewfiles={this.state.modalviewfiles}
          ref="child2"
        />
      </div>
    );
  }
}
export default RadicationEmail;
