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
import FilterUserDependence from "./FilterUserDependence";
import FilterUserGroup from "./FilterUserGroup";
import FilterUserName from "./FilterUserName";
import ListUserEnabled from "./ListUserEnabled";
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
    const {
      alldatacorrespondence,
      namecorrespondence,
      valuedependencia,
      datagroupuserselected,
    } = this.props;
    console.log("Valor dependencia => ", valuedependencia);
    console.log("Valor grupo seleccionado => ", datagroupuserselected);
    return (
      <Modal className="modal-xl" isOpen={this.state.modal}>
        <ModalHeader>
          {" "}
          <i className="fa fa-sticky-note" /> Agregar Anotacion -{" "}
          {namecorrespondence}
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
                    <i className="fa fa-university" /> Busqueda por dependencia
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === 2 })}
                    onClick={() => {
                      this.toggleTab(2);
                    }}
                  >
                    <i className="fa fa-users" /> Busqueda por grupo{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === 3 })}
                    onClick={() => {
                      this.toggleTab(3);
                    }}
                  >
                    <i className="fa fa-male" /> Buscar por nombre de usuario
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId={1}>
                  <FilterUserDependence />
                </TabPane>
                <TabPane tabId={2}>
                  <FilterUserGroup />
                </TabPane>
                <TabPane tabId={3}>
                  <FilterUserName />
                </TabPane>
              </TabContent>
            </div>
            <div className="col-md-6">
              <br />
              <div className="card card-body">
                <ListUserEnabled
                  dependencia={valuedependencia}
                  grupo={datagroupuserselected}
                />
              </div>
            </div>
            <div className="col-md-6">
              <br />
              <div className="card card-body">Lista de usuario agregados</div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label>Anotacion</label>
                <textarea className="form-control form-control-sm"></textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Tip de anotacion</label>
                <select className="form-control form-control-sm">
                  <option>Seleccione</option>
                  <option>Pagina</option>
                  <option>Documento</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>pagina</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Condicional en caso que se selecciones la opcion pagina"
                />
              </div>
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
  return {
    alldatacorrespondence: state.dataCorrespondenceExternal.alldata,
    namecorrespondence: state.dataCorrespondenceExternal.alldata.map(
      (aux) => aux.issue
    ),
    valuedependencia: state.dataAnottationsReducers.valuedependencia,
    datagroupuserselected: state.dataAnottationsReducers.datagroupuserselected,
  };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(ModalCreateAnottation);
