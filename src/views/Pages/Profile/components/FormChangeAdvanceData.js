import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row, Card, CardBody } from "reactstrap";

class FormChangeAdvanceData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardBody>
            <div className="container">
              <form>
                <Row>
                  <Col sm="6">
                    <div className="form-group">
                      <label> Sede </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        defaultValue={this.props.data.headquarterName}
                        disabled
                      />
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="form-group">
                      <label>Dependencia</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        defaultValue={this.props.data.dependenceName}
                        disabled
                      />
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="form-group">
                      <label>Cargo</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        defaultValue={this.props.data.chargeName}
                        disabled
                      />
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="form-group">
                      <label>Rol</label>
                      {this.props.data.listRoleResponses ? (
                        <ul className="">
                          {this.props.data.listRoleResponses.map((aux, id) => {
                            return (
                              <li key={id} className="" style={{}}>
                                {aux.label}
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <div className="text-danger">No hay Roles asignado</div>
                      )}
                    </div>
                  </Col>
                  {/* <Col sm="12">
                    <div className="form-group">
                      <label>Permisos</label>
                      <textarea
                        className="form-control form-control-sm"
                        readOnly
                        placeholder="Permisos asignados por el administrador"
                      />
                    </div>
                  </Col> */}
                </Row>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

FormChangeAdvanceData.propTypes = {};

const mapStateToProps = (state) => {
  return { data: state.authReducer.user };
};

export default connect(mapStateToProps)(FormChangeAdvanceData);
