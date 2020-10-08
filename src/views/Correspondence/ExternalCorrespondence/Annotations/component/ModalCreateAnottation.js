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
  Collapse,
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
  setDataCorrespondence,
} from "./../../../../../actions/anottationsActions";
import PDFViewer from "./../../../../../utils/pdfViewer/components/PDFViewer";
import PDFJSBackend from "./../../../../../utils/pdfViewer/backend/pdfjs";
import { Formik } from "formik";
import * as Yup from "yup";
class ModalCreateAnottation extends Component {
  constructor(props) {
    super();
    this.state = {
      modal: props.modalnewanottation,
      activeTab: 1,
      typeanottation: "",
      id: props.id,
      collapse: false,
      fileName: "",
      idFile: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.id) {
      return {
        id: props.id,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
      this.props.getDataCorrespondence(this.props.id);
    }
    return null;
  }

  toggle = (id) => {
    this.setState({
      modal: !this.props.modalnewanottation,
      id: id,
    });
  };

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  toggleCollapse = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  render() {
    const { activeTab, idFile, fileName } = this.state;
    const {
      alldatacorrespondence,
      namecorrespondence,
      valuedependencia,
      datagroupuserselected,
      descriptionanottation,
      typeanottation,
      dataUserListSelect,
      datacorrespondence,
      page,
    } = this.props;
    //const apages = .push(page);
    console.log("Array de paginas", page);

    const createAnottations = (
      e,
      descriptionanottation,
      dataUserListSelect
    ) => {
      e.preventDefault();
      console.log(
        JSON.stringify({
          receivedId: this.state.id,
          anottation: descriptionanottation,
          users: dataUserListSelect,
        })
      );
    };

    const collapseViewFile = () => {
      let url = `http://localhost:8090/api/sgdea/service/external/correspondence/received/filing/attached/view/file/${idFile}/${fileName}`;
      return (
        <div>
          {this.state.idFile && this.state.fileName !== "" ? (
            <PDFViewer
              ref={this.myViewer}
              backend={PDFJSBackend}
              src={url}
              width="1100"
              height="300"
            />
          ) : (
            <div className="jumbotron">
              <h6 className="text-center">No hay datos</h6>
            </div>
          )}
        </div>
      );
    };

    return (
      <React.Fragment>
        <Modal className="modal-xl" isOpen={this.state.modal}>
          <form
            className="form"
            onSubmit={(e) =>
              createAnottations(e, descriptionanottation, dataUserListSelect)
            }
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
                  <div className="card">
                    <div className="card-header">
                      {" "}
                      <i className="fa fa-paperclip" /> Documento adjunto
                    </div>
                    <div className="card-body">
                      <table className="table table-sm table-bordered">
                        <thead>
                          <tr>
                            <th>Nombre del archivo</th>
                            <th>Paginas</th>
                            <th>Tamaño</th>
                            <th>Visualizar</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.keys(datacorrespondence) ? (
                            datacorrespondence.map((aux, id) => {
                              return (
                                <tr key={id}>
                                  <td>{aux.filenameOriginal}</td>
                                  <td>{aux.numImages}</td>
                                  <td>{aux.size}</td>
                                  <td className="">
                                    <button
                                      title="Ver adjunto"
                                      className="btn btn-secondary btn-sm"
                                      type="button"
                                      onClick={() => {
                                        this.toggleCollapse();
                                        this.setState({
                                          idFile: aux.id,
                                          fileName: aux.fileName,
                                        });
                                      }}
                                    >
                                      <i className="fa fa-eye" />
                                    </button>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <tr>No hay documentos adjuntos</tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <Collapse isOpen={this.state.collapse}>
                  <div className="col-md-12">{collapseViewFile()}</div>
                </Collapse>
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
                      <option value="1">Documento</option>
                      <option value="2">Pagina</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  {typeanottation === "2" ? (
                    <div className="form-group">
                      <label>pagina</label>
                      <select className="form-control form-control-sm">
                        {page ? (
                          page.map((aux) => {
                            return (
                              <option key="id" value={aux}>
                                {aux}
                              </option>
                            );
                          })
                        ) : (
                          <option>No hay paginas</option>
                        )}
                      </select>
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
                  <i className="fa fa-times" /> Cerrar
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
    page: state.dataAnottationsReducers.datacorrespondence.attachments
      ? state.dataAnottationsReducers.datacorrespondence.attachments.map(
          (aux) => aux.numImages
        )
      : {},
    dataUserListSelect: state.dataAnottationsReducers.dataUserListSelect,
    datacorrespondence:
      state.dataAnottationsReducers.datacorrespondence.attachments || [],
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
    getDataCorrespondence: (id) => {
      dispatch(setDataCorrespondence(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(ModalCreateAnottation);
