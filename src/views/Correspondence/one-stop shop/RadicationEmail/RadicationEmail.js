import React, { Component } from "react";
import HeaderInbox from "./../../../Radication/RadicationDocuments/Components/Header/HeaderInbox";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Row, Col } from "reactstrap";
class RadicationEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            <div className="table-reponsive">
              <Row>
                <Col md="12">
                  <BootstrapTable
                    remote={true} // dudas de como funciona este props para actualizar la data
                    data={this.state.dataConglomerates}
                    search
                    hover
                    striped
                    bordered={false}
                    searchPlaceholder={"Hola"}
                    className="tableConglo tableConglo1 texto-Conglo actionMenuConglo"
                  >
                    <TableHeaderColumn
                      export={false}
                      isKey
                      dataField={"id"}
                      hidden={this.state.hiddenColumnID}
                    />
                    <TableHeaderColumn
                      dataFormat={this.indexN}
                      //   width={"50"}
                      dataField={"id"}
                      dataAlign="center"
                    >
                      #
                    </TableHeaderColumn>
                    <TableHeaderColumn
                      dataField={"code"}
                      dataAlign="center"
                      //   width={"100"}
                    >
                      {" "}
                      Fecha
                    </TableHeaderColumn>
                    <TableHeaderColumn
                      dataField={"name"}
                      dataAlign="center"
                      //   width={"205"}
                    >
                      Remitente
                    </TableHeaderColumn>
                    <TableHeaderColumn
                      dataField={"description"}
                      dataAlign="center"
                      //   width={"230"}
                    >
                      Asunto
                    </TableHeaderColumn>
                    <TableHeaderColumn
                      dataField={"createdAt"}
                      dataAlign="center"
                      //   width={"150"}
                    >
                      Contenido
                    </TableHeaderColumn>
                  </BootstrapTable>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default RadicationEmail;
