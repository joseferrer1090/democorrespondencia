import React, { Component } from "react";
import HeaderBox from "./../../../Header/HeaderInbox";
import SideBar from "./../../../Sidebar/SidebarInboxComponent";
import {
  Card,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";
import PropTypes from "prop-types";

class ViewCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <HeaderBox />
        <div>
          <div className="col-md-12">
            <div
              style={{
                minHeight: "600px",
                marginTop: "0px"
              }}
            >
              <div className="row">
                <SideBar />
                <div className="col-md-10" style={{ padding: "0px" }}>
                  <Card body>
                    <div>
                      <h3 className="card-title">
                        Asunto: Descripcion del asunto{" "}
                        <div className="float-right">
                          <button className="btn btn-secondary btn-sm">
                            {" "}
                            <i className="fa fa-print" />
                          </button>
                          &nbsp;
                          <button
                            className="btn btn-secondary btn-sm"
                            onClick={() => {
                              window.open("", "", "width=1000,height=600");
                            }}
                          >
                            {" "}
                            <i className="fa fa-expand" />
                          </button>
                          &nbsp;
                          <button className="btn btn-secondary btn-sm">
                            {" "}
                            <i
                              className="fa fa-file-text-o"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </h3>
                      <hr style={{ marginTop: "0px" }} />
                    </div>
                    {/* Primera seccion */}
                    <div className=" card card-body">
                      <p>Informacion importante de la radicación</p>
                    </div>
                    {/* Fin primera seccion */}

                    {/* Segunda seccion */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card card-body">
                          <p>Remitente</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card card-body">
                          <p>Destinatario</p>
                        </div>
                      </div>
                    </div>
                    {/* Fin segunda seccion */}

                    {/* Tercera seccion */}
                    <div className="card card-body">
                      <p>Informacion del documento</p>
                    </div>
                    {/* Fin tercera seccion */}

                    {/* Cuarta seccion */}
                    <div
                      className="card card-body"
                      style={{ minHeight: "600px" }}
                    >
                      <embed
                        src="http://www.africau.edu/images/default/sample.pdf"
                        width={"100%"}
                        height={600}
                        type="application/pdf"
                      />
                    </div>
                    {/* Fin Cuarta seccion */}

                    {/* Quinta seccion */}
                    <div className="card card-body">
                      <p>Detalles de la radicación</p>
                    </div>
                    {/* Fin quinta seccion */}
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ViewCorrespondence.propTypes = {};

export default ViewCorrespondence;
