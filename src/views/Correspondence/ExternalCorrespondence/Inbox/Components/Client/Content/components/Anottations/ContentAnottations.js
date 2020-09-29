import React, { Component, Fragment } from "react";
import Redirect from "react-router-dom";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputSearchAnottations from "./InputSearchAnottations";
import classnames from "classnames";
import moment from "moment";
import { loadPaginationAnottations } from "./../../../../../../../../../actions/anottationsActions";

/* Componente que va tener la informacion de las anotaciones y demas funcionalidades relacionadas con ella
 1- Maquetar el componete
 2- Conectar el componente con redux y obtener la data correspondiente
 3- instanciar y relacionar los metodos relacionados con las anotaciones.
 4- Agregar la funcionalidad de la paginacion
 5- Agregar la funcionalidad de la busqueda. 
 6- Probar el componente.

*/

class ContentAnottations extends Component {
  constructor(props) {
    super();
    this.state = {
      activeTab: "1",
    };
  }

  componentDidMount() {
    this.props.paginationAnottations(1);
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  DateFiling = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };

  viewcorrespondence = (id) => {
    const path = `/#/correspondence/external/view/${id}`;
    window.location.replace(path);
  };

  /* PAGINACIÓN */

  handlePageChange = (event) => {
    const currentPage = this.props.number;
    let targetPage = event.target.value;
    if (targetPage !== "") {
      this.validatePagination(targetPage);
    } else {
      this.validatePagination(currentPage);
    }
  };

  firstPage = () => {
    const currentPage = this.props.number;
    let firstPage = 1;
    if (currentPage > firstPage) {
      this.validatePagination(firstPage);
      // this.props.pagination(firstPage);
    }
  };

  prevPage = () => {
    const currentPage = this.props.number;
    let prevPage = 1;

    if (currentPage > prevPage) {
      this.validatePagination(currentPage - prevPage);
      // this.props.pagination(currentPage - prevPage);
    }
  };

  lastPage = () => {
    const itemsCountPerPage = this.props.size;
    const totalElements = this.props.totalElements;
    const currentPage = this.props.number;
    let condition = Math.ceil(totalElements / itemsCountPerPage);
    if (currentPage < condition) {
      this.validatePagination(condition);
      // this.props.pagination(condition);
    }
  };

  nextPage = () => {
    const itemsCountPerPage = this.props.size;
    const totalElements = this.props.totalElements;
    const currentPage = this.props.number;
    if (currentPage < Math.ceil(totalElements / itemsCountPerPage)) {
      // this.props.pagination(currentPage + 1);
      this.validatePagination(currentPage + 1);
    }
  };

  /* FIN */

  disabledInput = () => {
    const { number, totalPages } = this.props;
    let disabled = false;
    if (number === totalPages) {
      disabled = true;
    }
    return disabled;
  };

  render() {
    const { alldata, totalPages, number } = this.props;
    const { activeTab } = this.state;
    const currentPage = this.props.number;
    const pageNumCss = {
      width: "45px",
      boder: "1px solid #17A2B8",
      color: "#17A2B8",
      textAling: "center",
      fontWeight: "bold",
    };
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-7">
            {/* <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: activeTab === "1",
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  <i className="fa fa-search" /> Busqueda simple
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: activeTab === "2",
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  {" "}
                  <i className="fa fa-search-plus" /> Busuqueda avanzada
                </NavLink>
              </NavItem>
            </Nav> */}
            {/* <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="alert alert-info">
                  <i className="fa fa-exclamation-triangle" />
                  Esta es la informacion de la busqueda 1
                </div>
                <InputSearchAnottations />
              </TabPane>
              <TabPane tabId="2">
                <div className="alert alert-info">
                  <i className="fa fa-exclamation-triangle" />
                  Esta es la informacion de la busqueda 2
                </div>
                <div> Probnado</div>
              </TabPane>
            </TabContent> */}
          </div>
          <div className="col-md-5" style={{ marginTop: "2%" }}>
            <center>
              Página <b>{number}</b> de <b>{totalPages}</b>{" "}
            </center>
            <InputGroup size="sm">
              <InputGroupAddon addonType="prepend">
                <Button
                  className="btn btn-sm btn-light"
                  type="button"
                  variant="outline-info"
                  disabled={currentPage === 1 ? true : false}
                  onClick={this.firstPage}
                >
                  <i
                    style={{ fontWeight: "bold" }}
                    className="fa fa-angle-double-left"
                  />
                </Button>
                <Button
                  className="btn btn-sm btn-light"
                  type="button"
                  variant="outline-info"
                  disabled={currentPage === 1 ? true : false}
                  onClick={this.prevPage}
                >
                  <i className="fa fa-chevron-left" />
                </Button>
              </InputGroupAddon>
              <Input
                // Validar que no entre en NaN
                type="number"
                min={1}
                max={totalPages}
                style={pageNumCss}
                className="bg-light"
                name="currentPage"
                placeholder="Buscar página"
                // value={number}
                // defaultValue={number + 1}
                disabled={this.disabledInput()}
                onChange={this.handlePageChange}
              />

              <InputGroupAddon addonType="append">
                <Button
                  className="btn btn-sm btn-light"
                  type="button"
                  variant="outline-info"
                  disabled={currentPage === totalPages ? true : false}
                  onClick={this.nextPage}
                >
                  <i className="fa fa-chevron-right" />
                </Button>
                <Button
                  className="btn btn-sm btn-light"
                  type="button"
                  variant="outline-info"
                  disabled={currentPage === totalPages ? true : false}
                  onClick={this.lastPage}
                >
                  <i
                    style={{ fontWeight: "bold" }}
                    className="fa fa-angle-double-right"
                  />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
        <br />
        <div className="">
          <div className="table">
            <table className="table table-hover table-sm table-condensed">
              <thead>
                <tr
                  className="text-center"
                  style={{ background: "#45B254 !important" }}
                >
                  {/* <th style={{ width: "10px" }}>
                    <input
                      type="checkbox"
                      onClick={() =>
                        this.setState(
                          {
                            checkall: !this.state.checkall,
                          },
                          () =>
                            this.toggleCheckboxes(this.state.checkall, "foo")
                        )
                      }
                    />
                  </th> */}
                  <th style={{ width: "150px" }}>Fecha de creacion</th>
                  <th style={{ width: "10px" }}>Usuario creador</th>
                  <th style={{ width: "150px" }}>Anotacion</th>
                  <th style={{ width: "50px" }}>Pagina</th>
                  <th style={{ width: "100px" }}>Acciones</th>
                </tr>
              </thead>
              {alldata.map((aux, id) => {
                return (
                  <tbody className="text-center">
                    <tr key={id}>
                      <td>{this.DateFiling(aux.createdAt)}</td>
                      <td>{aux.creatorUser}</td>
                      <td>{aux.annotation}</td>
                      <td>{aux.page}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          title="Ver anotacion"
                          onClick={() =>
                            this.viewcorrespondence(
                              aux.externalCorrespondenceReceived.id
                            )
                          }
                        >
                          <i className="fa fa-eye" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alldata: state.dataAnottationsReducers.alldata,
    anottations: state.dataAnottationsReducers.anottations,
    totalPages: state.dataAnottationsReducers.totalPages,
    number: state.dataAnottationsReducers.number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    paginationAnottations(page) {
      dispatch(loadPaginationAnottations(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentAnottations);
