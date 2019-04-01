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

import PropTypes from "prop-types";

class Headerinbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="">
        <Navbar color="light" light expand="md">
          <NavbarBrand>reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Nueva radicacion
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink>Configuracion de usabilidad </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Exportar
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>

            <Nav className="ml-auto">
              <NavItem>
                <NavLink>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Reportes
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Impresión
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Más opciones
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Headerinbox.propTypes = {};

export default Headerinbox;
