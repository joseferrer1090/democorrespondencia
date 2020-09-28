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
} from "reactstrap";

class ModalCreateAnottation extends Component {
  constructor(props) {
    super();
    this.state = {
      modal: props.modalnewanottation,
    };
  }
  toggle = () => {
    this.setState({
      modal: !this.props.modalnewanottation,
    });
  };

  render() {
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
                  <NavLink href="#" active>
                    Busqueda por dependencia
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Busqueda por grupo </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Buscar por nombre de usuario</NavLink>
                </NavItem>
              </Nav>
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
