import React, { Component, Fragment } from "react";
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
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputSearch from "./../../InputSearch";
import classnames from "classnames";

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

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-7">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1",
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
                    active: this.state.activeTab === "2",
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  {" "}
                  <i className="fa fa-search-plus" /> Busqueda avanzada
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="10">
                    <div>Probando</div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col md="12">
                    <div> Probnado</div>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
          <div className="col-md-5">Paginacion de la tabla</div>
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
                  <th style={{ width: "10px" }}>
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
                  </th>
                  <th style={{ width: "150px" }}>Sede</th>
                  <th style={{ width: "10px" }}>No.Radicación</th>
                  <th style={{ width: "150px" }}>Asunto</th>
                  <th style={{ width: "100px" }}>Fecha de radicación</th>
                  <th style={{ width: "50px" }}>Destinatarios</th>
                  <th style={{ width: "10px" }}>Estado</th>
                  <th style={{ width: "100px" }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(ContentAnottations);
