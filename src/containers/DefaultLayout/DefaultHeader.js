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
  UncontrolledDropdown,
} from "reactstrap";
import PropTypes from "prop-types";
import url from "./../../services/deploymentdata";
import {
  AppAsideToggler,
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler,
} from "@coreui/react";
import logo from "../../assets/img/sevenet_ori.svg";
import sygnet from "../../assets/img/sevenet_ori.svg";
import Cookie from "js-cookie";
import { connect } from "react-redux";
import { getUser, getPhotoUser } from "./../../actions/authActions";
import { decode } from "jsonwebtoken";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    Cookie.remove("auth");
    localStorage.removeItem("auth_token");
    window.location.replace("/");
  };

  componentDidMount() {
    const token = localStorage.getItem("auth_token");
    const username = decode(token);
    this.getData();
    this.getDataImg();
  }

  getData = () => {
    this.props.onGeneralData();
  };

  getDataImg = () => {
    this.props.getUserProfileImage();
  };

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
        <Nav className="ml-auto" navbar style={{ marginRight: "40px" }}>
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
          {/* <AppHeaderDropdown direction="down"> */}
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav style={{ marginRight: "4px !important" }}>
              {this.props.logged}
              {this.props.imageprofile ? (
                <img
                  src={this.props.imageprofile}
                  className="img-avatar"
                  alt="administratos@image"
                />
              ) : (
                <i className="fa fa-spin fa-spinner" />
              )}
            </DropdownToggle>
            {/* <DropdownMenu right style={{ right: "auto" }}> */}
            <DropdownMenu style={{ marginLeft: "-45px" }}>
              <DropdownItem header tag="div" className="text-center">
                <strong>Cuenta</strong>
              </DropdownItem>
              <DropdownItem>
                <Link
                  style={{
                    textDecoration: "none",
                    cursor: "pointer !important",
                    color: "black",
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
                onClick={(e) => {
                  window.location = `${url.defaultLocal}3000/#/middleware`;
                  return null;
                }}
              >
                <i className="fa fa-refresh" />
                Principal
              </DropdownItem>
              <DropdownItem onClick={() => this.logout()}>
                <i className="fa fa-lock" /> Cerrar sesión
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* </AppHeaderDropdown> */}
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" />
        <AppAsideToggler className="d-lg-none" mobile /> */}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    logged: state.authReducer.user.username,
    imageprofile: state.authReducer.imguser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGeneralData: () => {
      dispatch(getUser());
    },
    getUserProfileImage: () => {
      dispatch(getPhotoUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader);
