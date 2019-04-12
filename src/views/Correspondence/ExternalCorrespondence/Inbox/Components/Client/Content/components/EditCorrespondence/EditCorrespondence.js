import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderInbox from "./../../../Header/HeaderInbox";
import SideBarInbox from "./../../../Sidebar/SidebarInboxComponent";
import { Card } from "reactstrap";

class EditCorrespondence extends Component {
  render() {
    return (
      <div>
        <HeaderInbox />
        <div>
          <div className="col-md-12">
            <div
              style={{
                minHeight: "600px",
                marginTop: "0px"
              }}
            >
              <div className="row">
                <SideBarInbox />
                <div className="col-md-10" style={{ padding: "0px" }}>
                  <Card body>
                    <div>
                      <h3 className="card-title">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          onClick={() => {
                            this.props.history.goBack();
                          }}
                          title="atras"
                        >
                          {" "}
                          <i className="fa fa-arrow-left" />{" "}
                        </button>{" "}
                        Modificar correspondencia recibida - Titulo de
                        correspondencia
                      </h3>
                    </div>
                    <hr style={{ marginTop: "0px" }} />
                    <form>
                      <div className="card card-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group">
                              <label> Fecha de radicación </label>
                              <dd> Probando </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label>Hora de radicación </label>
                              <dd> Probando </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label> Sede </label>
                              <dd> Probando </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label> Vigencia </label>
                              <dd>Probando</dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label> Consecutivo </label>
                              <dd> Probando </dd>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label> Usario radicador </label>
                              <dd> Probando </dd>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditCorrespondence.propTypes = {};

export default EditCorrespondence;
