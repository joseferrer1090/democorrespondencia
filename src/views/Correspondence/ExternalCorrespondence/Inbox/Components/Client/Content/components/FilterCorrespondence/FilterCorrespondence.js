import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderBox from "./../../../Header/HeaderInbox";
import SideBar from "./../../../Sidebar/SidebarInboxComponent";
import { Card } from "reactstrap";

class FilterCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="">
        <HeaderBox />
        <div>
          <div className="col-md-12">
            <div
              style={{
                minHeight: "600px",
                marginTop: "0px"
              }}
            >
              <div className="row">
                <SideBar />
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
                        Consulta de correspondencias recibidas
                        <div className="float-right">
                          <div
                            className="btn-group btn-group-sm"
                            role="group"
                            aria-label="..."
                          >
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              title="Buscar"
                              onClick={() => {
                                alert("probando");
                              }}
                            >
                              <i className="fa fa-search" />
                            </button>

                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              title="cancelar"
                            >
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </div>
                      </h3>
                    </div>
                    <hr style={{ marginTop: "0px" }} />
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

FilterCorrespondence.propTypes = {};

export default FilterCorrespondence;
