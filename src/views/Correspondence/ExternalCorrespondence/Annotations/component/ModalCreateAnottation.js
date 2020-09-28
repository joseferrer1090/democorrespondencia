import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  TabPane,
  TabContent,
} from "reactstrap";
import classnames from "classnames";

class ModalCreateAnottation extends Component {
  constructor(props) {
    super();
    this.state = {
      modal: props.modalnewanottation,
      activeTab: 1,
    };
  }
  toggle = () => {
    this.setState({
      modal: !this.props.modalnewanottation,
    });
  };

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  render() {
    const { activeTab } = this.state;
    return (
      <Modal className="modal-xl" isOpen={this.state.modal}>
        <ModalHeader>
          {" "}
          <i className="fa fa-sticky-note" /> Anotacion
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-12">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === 1 })}
                    onClick={() => {
                      this.toggleTab(1);
                    }}
                  >
                    Busqueda por dependencia
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === 2 })}
                    onClick={() => {
                      this.toggleTab(2);
                    }}
                  >
                    Busqueda por grupo{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === 3 })}
                    onClick={() => {
                      this.toggleTab(3);
                    }}
                  >
                    Buscar por nombre de usuario
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId={1}>filtro uno</TabPane>
                <TabPane tabId={2}>filtro dos</TabPane>
                <TabPane tabId={3}>filtro tres</TabPane>
              </TabContent>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="float-right">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => {
                this.setState({
                  modal: false,
                });
              }}
            >
              <i className="fa fa-times" /> Cerrer
            </button>
            &nbsp;
            <button type="button" className="btn btn-success btn-sm">
              <i className="fa fa-check" /> Crear anotacion
            </button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(ModalCreateAnottation);
