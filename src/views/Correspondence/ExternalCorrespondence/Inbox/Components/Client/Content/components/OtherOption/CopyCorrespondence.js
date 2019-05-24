import React, { Component } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Card,
  CardHeader,
  CardBody,
  Collapse
} from "reactstrap";
import PropTypes from "prop-types";

class CopyCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.modalcopy,
      collapse: false,
      collapse2: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modalcopy
    }));
  };

  toggleCollapse = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  toggleCollapse2 = () => {
    this.setState({
      collapse2: !this.state.collapse2
    });
  };

  render() {
    return (
      <Modal className={"modal-xl"} isOpen={this.state.modal} fade={false}>
        <ModalHeader>Copiar correspondencia</ModalHeader>
        <ModalBody>
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <Card body>
                  <h5 className="card-title">
                    {" "}
                    Usuario origen{" "}
                    <sub>
                      {" "}
                      <a
                        href=""
                        onClick={e => {
                          e.preventDefault();
                          this.toggleCollapse();
                        }}
                      >
                        busqueda avanzada{" "}
                      </a>{" "}
                    </sub>{" "}
                  </h5>
                  <hr style={{ marginTop: "0px" }} />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Fecha de radicación desde</label>
                        <input
                          type="date"
                          className="form-control form-control-sm"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Fecha de radicación hasta</label>
                        <input
                          type="date"
                          className="form-control form-control-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <Collapse isOpen={this.state.collapse}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label> Conglomerado </label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label> Empresa </label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label> Sede </label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label> Dependencia </label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </Collapse>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Usuario</label>
                        <select className="form-control form-control-sm">
                          <option>Seleccione...</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-md-6">
                <Card body>
                  <h5 className="card-title">
                    Usuario destino{" "}
                    <sub>
                      {" "}
                      <a
                        href=""
                        onClick={e => {
                          e.preventDefault();
                          this.toggleCollapse2();
                        }}
                      >
                        busqueda avanzada{" "}
                      </a>{" "}
                    </sub>{" "}
                  </h5>
                  <hr style={{ marginTop: "0px" }} />
                  <Collapse isOpen={this.state.collapse2}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Conglomerado</label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Empresa</label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Sede</label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Dependencia</label>
                          <select className="form-control form-control-sm">
                            <option>Seleccione...</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </Collapse>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Usuario</label>
                        <select className="form-control form-control-sm">
                          <option>Seleccione...</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="float-right">
                        <button className="btn btn-secondary btn-sm">
                          {" "}
                          <i className="fa fa-plus" /> Agregar{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-md-12">
                <table className="table">
                  <thead className="thead-light text-center">
                    <tr>
                      <th scope="col">Sede</th>
                      <th scope="col">Dependencia</th>
                      <th scope="col">Usuario</th>
                      <th scope="col">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>BOGOTA - PRINCIPAL </td>
                      <td> ALMACEN</td>
                      <td> SANDRA MILENA DIAZ ARDILA</td>
                      <td>
                        <button className="btn btn-danger btn-sm">
                          {" "}
                          <i className="fa fa-trash" />{" "}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => {
              this.setState({ modal: false });
            }}
          >
            {" "}
            <i className="fa fa-times" /> Cerrar{" "}
          </button>
          <button className="btn btn-secondary btn-sm">
            {" "}
            <i className="fa fa-copy" /> Copiar{" "}
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

CopyCorrespondence.propTypes = {};

export default CopyCorrespondence;
