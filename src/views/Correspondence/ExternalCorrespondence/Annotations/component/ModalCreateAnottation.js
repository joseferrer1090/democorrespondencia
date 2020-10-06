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
import ListUserDestination from "./ListUserDestination";
import {
  addDescriptionAnottation,
  selectTypeAnottation,
  selectPageAnottation,
} from "./../../../../../actions/anottationsActions";
import { Formik } from "formik";
import * as Yup from "yup";
class ModalCreateAnottation extends Component {
  constructor(props) {
    super();
    this.state = {
      modal: props.modalnewanottation,
      activeTab: 1,
      typeanottation: "",
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
      descriptionanottation,
      typeanottation,
    } = this.props;

    const createAnottations = (
      e,
      descriptionanottation,
      datagroupuserselected
    ) => {
      e.preventDefault();
      console.log(
        JSON.stringify({
          receivedId: "f80bdd3f-8d48-4536-b292-9025df48f53e",
          anottation: descriptionanottation,
          users: datagroupuserselected,
        })
      );
    };

    return (
      <React.Fragment>
        <Modal className="modal-xl" isOpen={this.state.modal}>
          <form
            className="form"
            onSubmit={(e) => createAnottations(e, descriptionanottation)}
          >
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
                        <i className="fa fa-university" /> Busqueda por
                        dependencia
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
                        <i className="fa fa-male" /> Buscar por nombre de
                        usuario
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
                  <div className="card card-body">
                    <ListUserDestination />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Anotacion</label>
                    <textarea
                      className="form-control form-control-sm"
                      onChange={(e) => {
                        this.props.onChangeDescription(e.target.value);
                      }}
                      value={descriptionanottation}
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Tip de anotacion</label>
                    <select
                      value={typeanottation}
                      className="form-control form-control-sm"
                      onChange={(e) =>
                        this.props.onChangeTypeAnottation(e.target.value)
                      }
                    >
                      <option value="">Seleccione</option>
                      <option value="1">Documento</option>
                      <option value="2">Pagina</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  {typeanottation === "2" ? (
                    <div className="form-group">
                      <label>pagina</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Condicional en caso que se selecciones la opcion pagina"
                      />
                    </div>
                  ) : null}
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
                <button type="submit" className="btn btn-success btn-sm">
                  <i className="fa fa-check" /> Crear anotacion
                </button>
              </div>
            </ModalFooter>
          </form>
        </Modal>
      </React.Fragment>
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
    descriptionanottation: state.dataAnottationsReducers.descriptionanottation,
    typeanottation: state.dataAnottationsReducers.typeanottation,
    page: state.dataAnottationsReducers.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeDescription: (data) => {
      dispatch(addDescriptionAnottation(data));
    },
    onChangeTypeAnottation: (data) => {
      dispatch(selectTypeAnottation(data));
    },
    onChangeSelectPageAnottation: (data) => {
      dispatch(selectPageAnottation(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(ModalCreateAnottation);
