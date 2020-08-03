import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import { FormUpdateData } from "./FormUpdateData";
import ChangePassword from "./ChangePasswordUser";
import ThemeSelector from "./ThemeSelector";
import ChangeTheme from "./ChangeThemeUser";
import FormAdvance from "./FormChangeAdvanceData";

class TabInformationUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
    };
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              {" "}
              <i className="fa fa-user" /> Datos personales
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggle("5");
              }}
            >
              <i className="fa fa-gear" /> Datos adicionales
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              <i className="fa fa-lock" /> Cambiar contraseña
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              <i className="fa fa-paint-brush" /> Tema
            </NavLink>
          </NavItem> */}
          {/* <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              <i className="fa fa-wrench" /> Personalizar tema
            </NavLink>
          </NavItem> */}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <FormUpdateData />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <ThemeSelector />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <ChangeTheme />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <ChangePassword />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">
                <FormAdvance />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Fragment>
    );
  }
}

TabInformationUser.propTypes = {};

export default TabInformationUser;
