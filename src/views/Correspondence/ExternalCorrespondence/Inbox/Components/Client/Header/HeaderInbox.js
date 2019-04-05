import React, { Component } from "react";
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
  DropdownItem
} from "reactstrap";
import ModalExport from "./../Content/components/ModalExport/ModalExport";
import ModalExport2 from "./../Content/components/ModalExport/ModalExportRecibidoDespachado";

import PropTypes from "prop-types";

class Headerinbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modalexport: false,
      modalexport2: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  OpenModalExport = () => {
    this.refs.child.toggle();
  };

  OpenModalExport2 = () => {
    this.refs.child2.toggle();
  };

  render() {
    return (
      <div className="d-none d-sm-block">
        <Navbar
          color="light"
          light
          expand="md"
          style={{
            height: "40px ",
            marginTop: "-25px"
          }}
        >
          <NavbarBrand>{"  "}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto">
              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{ color: "black" }}>
                    <i className="fa fa-plus" /> Nueva radicacion
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <i className="fa fa-file-text" /> Radicar documento{" "}
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      <i className="fa fa-clone" /> Radicar trámite
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <NavLink>
                  <i className="fa fa-wrench" /> Configuracion de usabilidad{" "}
                </NavLink>
              </NavItem>
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
                    <i className="fa fa-file-pdf-o" /> Recibido / despachado{" "}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>

            <Nav className="ml-auto">
              <NavItem>
                <NavLink>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret style={{ color: "black" }}>
                      <i className="fa fa-pie-chart" /> Reportes
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <i className="fa fa-file-pdf-o" /> Generar reporte{" "}
                      </DropdownItem>
                      <DropdownItem>
                        <i className="fa fa-file-pdf-o" /> Planilla de
                        correspondencia{" "}
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret style={{ color: "black" }}>
                      <i className="fa fa-print" /> Impresión
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <i className="fa fa-print" /> Impresión masiva
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret style={{ color: "black" }}>
                      <i className="fa fa-list" /> Más opciones
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <i className="fa fa-copy" /> Copiar correspondencia{" "}
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <ModalExport ModalExport={this.state.modalexport} ref="child" />
        <ModalExport2 modalrecibido={this.state.modalexport2} ref="child2" />
      </div>
    );
  }
}

Headerinbox.propTypes = {};

export default Headerinbox;
