import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ModalExport from "./../Content/components/ModalExport/ModalExport";
import ModalExport2 from "./../Content/components/ModalExport/ModalExportRecibidoDespachado";
import ModalReport from "./../Content/components/ModalReport/ModalReport";
import ModalGeneralReport from "./../Content/components/ModalReport/ModalGenerateReport";
import ModalCopy from "./../Content/components/OtherOption/CopyCorrespondence";
import ModalPrintMassive from "./../Content/components/ModalMassiveImpression/ModalMassiveImpression";
import Radication from "./../../../../../../Radication/RadicationDocuments/RadicationDocument";

import { Link } from "react-router-dom";

class Headerinbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modalexport: false,
      modalexport2: false,
      modalreport: false,
      modalreportgeneral: false,
      modalcopy: false,
      // modalmassive: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  OpenModalExport = () => {
    this.refs.child.toggle();
  };

  OpenModalExport2 = () => {
    this.refs.child2.toggle();
  };

  OpenModalReport = () => {
    this.refs.child3.toggle();
  };

  OpenModalGeneralReport = () => {
    this.refs.child4.toggle();
  };

  OpenModalCopyCorrespondence = () => {
    this.refs.child5.toggle();
  };

  // OpenModalImpressionMassive = () => {
  //   this.refs.child6.toggle();
  // };

  routeChange() {
    let path = `/radication/simple`;
    this.props.history.push(path);
  }

  render() {
    console.log(this.state.isOpen);
    return (
      <Fragment>
        <div className="d-none d-sm-block">
          <Navbar
            color="light"
            light
            expand="md"
            style={{
              height: "40px ",
              marginTop: "-25px",
            }}
          >
            <NavbarBrand>{"  "}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <center>
                <Nav className="mr-auto">
                  <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret style={{ color: "black" }}>
                        <i className="fa fa-plus" /> Nueva radicacion
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <Link to="/radication/correspondenceinboxexternal/document">
                            {" "}
                            <i className="fa fa-file-text" /> Radicar documento{" "}
                          </Link>
                        </DropdownItem>
                        <DropdownItem>
                          {" "}
                          <Link to="/radication/procedure">
                            <i className="fa fa-clone" /> Radicar trámite
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                  &nbsp;
                  <NavItem>
                    <NavLink>
                      <i className="fa fa-wrench" /> Configuracion de usabilidad{" "}
                    </NavLink>
                  </NavItem>
                  &nbsp;
                  <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret style={{ color: "black" }}>
                        <i className="fa fa-file-pdf-o" /> Exportar
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          onClick={() => {
                            this.OpenModalExport();
                          }}
                        >
                          {" "}
                          <i className="fa fa-file-pdf-o" /> Archivo de consulta{" "}
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => {
                            this.OpenModalExport2();
                          }}
                        >
                          <i className="fa fa-file-pdf-o" /> Recibido /
                          despachado{" "}
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                  &nbsp;
                  <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret style={{ color: "black" }}>
                        <i className="fa fa-pie-chart" /> Reportes
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          onClick={() => {
                            this.OpenModalGeneralReport();
                          }}
                        >
                          <i className="fa fa-file-pdf-o" /> Generar reporte{" "}
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => {
                            this.OpenModalReport();
                          }}
                        >
                          <i className="fa fa-file-pdf-o" /> Plantilla de
                          correspondencia{" "}
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                  &nbsp;
                  <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret style={{ color: "black" }}>
                        <i className="fa fa-print" /> Impresión
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          onClick={() => {
                            alert("Probando apenas");
                          }}
                        >
                          <i className="fa fa-print" /> Impresión masiva
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                  &nbsp;
                  <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret style={{ color: "black" }}>
                        <i className="fa fa-list" /> Más opciones
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          onClick={() => this.OpenModalCopyCorrespondence()}
                        >
                          <i className="fa fa-copy" /> Copiar correspondencia{" "}
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                </Nav>
              </center>
            </Collapse>
          </Navbar>

          <ModalExport ModalExport={this.state.modalexport} ref="child" />
          <ModalExport2 modalrecibido={this.state.modalexport2} ref="child2" />
          <ModalReport modalreport={this.state.modalreport} ref="child3" />
          <ModalGeneralReport
            modalgeneralreport={this.state.modalreportgeneral}
            ref="child4"
          />
          <ModalCopy modalcopy={this.state.modalcopy} ref="child5" />
          {/* <ModalPrintMassive
          modalimpression={this.state.modalmassive}
          ref="child6"
        /> */}
        </div>
      </Fragment>
    );
  }
}

Headerinbox.propTypes = {};

export default Headerinbox;
