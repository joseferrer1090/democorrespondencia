import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";
import PropTypes from "prop-types";
import url from "./../../services/deploymentdata";
import {
  AppAsideToggler,
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";
import logo from "../../assets/img/sevenet_ori.svg";
import sygnet from "../../assets/img/sevenet_ori.svg";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 100, height: 40, alt: "Logo Lexco" }}
          minimized={{ src: sygnet, width: 40, height: 40, alt: "Logo Lexco" }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        {/* <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users">Users</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Settings</NavLink>
          </NavItem>
        </Nav> */}
        <Nav className="ml-auto" navbar>
          {/* <NavItem className="d-md-down-none">
            <NavLink href="#">
              <i className="icon-bell" />
              <Badge pill color="danger">
                5
              </Badge>
            </NavLink>
          </NavItem> */}
          {/* <NavItem className="d-md-down-none">
            <NavLink href="#">
              <i className="icon-list" />
            </NavLink>
          </NavItem> */}
          {/* <NavItem className="d-md-down-none">
            <NavLink href="#">
              <i className="icon-location-pin" />
            </NavLink>
          </NavItem> */}
          <AppHeaderDropdown direction="down">
            <UncontrolledDropdown nav direction="down">
              <DropdownToggle nav style={{ marginRight: "4px !important" }}>
                Usuario
                <img
                  src={"../../assets/img/avatars/user2.jpg"}
                  className="img-avatar"
                  alt="administratos@image"
                />
              </DropdownToggle>
              <DropdownMenu right style={{ right: "auto" }}>
                <DropdownItem header tag="div" className="text-center">
                  <strong>Herramientas</strong>
                </DropdownItem>
                <DropdownItem>
                  <Link
                    style={{
                      textDecoration: "none",
                      cursor: "pointer !important",
                      color: "black"
                    }}
                    to="/perfil"
                  >
                    {" "}
                    <i className="fa fa-user" /> Perfil{" "}
                  </Link>
                </DropdownItem>
                {/* <DropdownItem>
                <i className="fa fa-wrench" /> Herramientas
              </DropdownItem> */}
                <DropdownItem
                  onClick={e => {
                    window.location = `${url.defaultServer}3000/#/middleware`;
                    return null;
                  }}
                >
                  <i className="fa fa-refresh" /> cambiar de aplicacion
                </DropdownItem>
                <DropdownItem onClick={e => this.props.onLogout(e)}>
                  <i className="fa fa-lock" /> cerrar sesion
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </AppHeaderDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" />
        <AppAsideToggler className="d-lg-none" mobile /> */}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
