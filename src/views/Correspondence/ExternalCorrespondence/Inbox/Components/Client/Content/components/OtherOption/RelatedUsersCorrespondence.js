import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderInbox from "./../../../Header/HeaderInbox";
import SideBarInbox from "./../../../Sidebar/SidebarInboxComponent";
import { Card } from "reactstrap";

class RelatedUsersCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = [
      { date: "2012-01-01 02:00:01", severity: "ERROR", msg: "Foo failed" },
      {
        date: "2012-01-01 02:04:02",
        severity: "INFO",
        msg: "Bar was successful"
      },
      {
        date: "2012-01-01 02:10:12",
        severity: "DEBUG",
        msg: "Baz was notified"
      }
    ];
    return (
      <div>
        <HeaderInbox />
        <div className="col-md-12">
          <div
            style={{
              minHeight: "600px",
              marginTop: "0px"
            }}
          >
            <div className="row">
              <SideBarInbox />
              <div className="col-md-10" style={{ padding: "0px " }}>
                <Card body>
                  <div>
                    <h3 className="card-title">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => {
                          this.props.history.goBack();
                        }}
                        title="atras"
                      >
                        {" "}
                        <i className="fa fa-arrow-left" />{" "}
                      </button>{" "}
                      Usuarios relacionados con la comunicación recibida
                      {/* <div className="float-right">
                        <div
                          className="btn-group btn-group-sm"
                          role="group"
                          aria-label="..."
                        >
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            title="Adjuntar"
                            onClick={() => {
                              this.OpenCollapse();
                            }}
                          >
                            <i className="fa fa-upload" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            title="Cancelar"
                          >
                            <i className="fa fa-times" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            title="Guardar cambios"
                          >
                            <i className="fa fa-floppy-o" />
                          </button>
                        </div>
                      </div> */}
                    </h3>
                  </div>
                  <hr style={{ marginTop: "0px" }} />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="p-1 mb-0 bg-secondary text-dark">
                        Usuarios que despachan la comunicación recibida
                      </div>
                      <table className="table table-hover table-sm">
                        <thead className="thead-dark">
                          <tr>
                            <th className="text-center" scope="col">
                              Nombre
                            </th>
                            <th className="text-center" scope="col">
                              Dependencia
                            </th>
                            <th className="text-center" scope="col">
                              Origen
                            </th>
                            <th className="text-center" scope="col">
                              Documento
                            </th>
                            <th className="text-center" scope="col">
                              Consulta sobre correspondencia
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                            <th scope="row">Pedro</th>
                            <td>Dependencia 1</td>
                            <td>Registro de correspondencia</td>
                            <td>Original</td>
                            <td>
                              <code>
                                El usuario vió el detalle del documento Fecha :
                                04/10/2018 Hora : 09:06:32{" "}
                              </code>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <th scope="row">Pedro</th>
                            <td>Dependencia 1</td>
                            <td>Registro de correspondencia</td>
                            <td>Original</td>
                            <td>
                              <code>
                                El usuario vió el detalle del documento Fecha :
                                04/10/2018 Hora : 09:06:32{" "}
                              </code>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <th scope="row">Pedro</th>
                            <td>Dependencia 1</td>
                            <td>Registro de correspondencia</td>
                            <td>Original</td>
                            <td>
                              <code>
                                El usuario vió el detalle del documento Fecha :
                                04/10/2018 Hora : 09:06:32{" "}
                              </code>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div
                        className="col-md-12"
                        style={{ border: "1px solid #e3e3e3" }}
                      >
                        <p>
                          <code>Probando apenas</code>
                          <code>probnado</code>
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="p-1 mb-0 bg-secondary text-dark">
                        Destinatarios
                      </div>
                      <table className="table table-hover table-sm">
                        <thead className="thead-dark">
                          <tr>
                            <th className="text-center" scope="col">
                              Nombre
                            </th>
                            <th className="text-center" scope="col">
                              Dependencia
                            </th>
                            <th className="text-center" scope="col">
                              Origen
                            </th>

                            <th className="text-center" scope="col">
                              Consulta sobre correspondencia
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center">
                            <th scope="row">Pedro</th>
                            <td>Dependencia 1</td>

                            <td>Original</td>
                            <td>
                              <code>
                                El usuario vió el detalle del documento Fecha :
                                04/10/2018 Hora : 09:06:32{" "}
                              </code>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <th scope="row">Pedro</th>
                            <td>Dependencia 1</td>

                            <td>Original</td>
                            <td>
                              <code>
                                El usuario vió el detalle del documento Fecha :
                                04/10/2018 Hora : 09:06:32{" "}
                              </code>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <th scope="row">Pedro</th>
                            <td>Dependencia 1</td>

                            <td>Original</td>
                            <td>
                              <code>
                                El usuario vió el detalle del documento Fecha :
                                04/10/2018 Hora : 09:06:32{" "}
                              </code>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RelatedUsersCorrespondence.propTypes = {};

export default RelatedUsersCorrespondence;
