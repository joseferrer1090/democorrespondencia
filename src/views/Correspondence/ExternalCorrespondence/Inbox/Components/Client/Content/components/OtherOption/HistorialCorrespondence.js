import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderInbox from "./../../../Header/HeaderInbox";
import SideBarInbox from "./../../../Sidebar/SidebarInboxComponent";
import TimeLine from "./components/TimelineHorizontal";
import { Card } from "reactstrap";

class HistorialCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <HeaderInbox />
        <div className="">
          <div className="col-md-12">
            <p>Probnado </p>
          </div>
        </div>
        <div className="">
          <div className="col-md-12">
            <Card body>
              <TimeLine />
              <div className="row">
                <div className="col-md-6" style={{ border: "1px solid red" }}>
                  <table
                    className="table table-hover"
                    style={{ marginLeft: "16px" }}
                  >
                    <thead className="table-secondary">
                      <tr>
                        <th scope="col" width="50%">
                          Campos
                        </th>
                        <th scope="col" width="50%" className="text-center">
                          ORIGINAL
                          <br />
                          21/01/2019 - 03:53 PM
                          <br />
                          Usuario: EDGAR ANDRES CUERVO ORTEGA
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Fecha del documento</strong>
                        </td>
                        <td className="text-center">21/01/2019</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Tipo de documento</strong>
                        </td>
                        <td className="text-center">FACTURA MPYE</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Ciudad</strong>
                        </td>
                        <td className="text-center">BOGOTA</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Folios</strong>
                        </td>
                        <td className="text-center">10</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Tipo de llegada</strong>
                        </td>
                        <td className="text-center">A LA MANO</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Guía</strong>
                        </td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>
                          <strong>Nro. del documento</strong>
                        </td>
                        <td className="text-center">FEBT5612</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Remitente</strong>
                        </td>
                        <td className="text-center">
                          EMPAQUES IND DE COLOMBIA SAS
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Destinatarios</strong>
                        </td>
                        <td className="text-center">
                          ALMACEN - EDGAR ANDRES CUERVO ORTEGA
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Anexos</strong>
                        </td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>
                          <strong>Workflow</strong>
                        </td>
                        <td className="text-center">
                          365EMPAQUES IND DE COLOMBIA SAS 900406158-3 FEBT5612
                          EDGCUE - Circuito: MATERIA PRIMA Y EMPAQUE
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Plantilla</strong>
                        </td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>
                          <strong>Serie Documental</strong>
                        </td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>
                          <strong>Dependencia Serie</strong>
                        </td>
                        <td className="text-center">
                          LOGISTICA DE APROVISIONAMIENTO
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Imágenes</strong>
                        </td>
                        <td className="text-center bg-danger">0</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Tamaño imágenes</strong>
                        </td>
                        <td className="text-center bg-danger" />
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-6" style={{ border: "1px solid blue" }}>
                  <p>Probnado </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

HistorialCorrespondence.propTypes = {};

export default HistorialCorrespondence;
