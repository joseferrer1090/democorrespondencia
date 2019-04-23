import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderInbox from "./../../../Header/HeaderInbox";
import SideBarInbox from "./../../../Sidebar/SidebarInboxComponent";

class HistorialCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <HeaderInbox />
        <div className="row">
          <div className="col-md-12">
            <div className="p-3 mb-2 bg-secondary text-dark">
              Aqui va el Timeline horizontal con la unfirmacion
            </div>
          </div>
          <div className="col-md-6" style={{ border: "1px solid red" }}>
            {" "}
            <p>La estructura fija</p>{" "}
          </div>
          <div className="col-md-6" style={{ border: "1px solid blue" }}>
            {" "}
            <p>La estructura dinamica</p>{" "}
          </div>
        </div>
      </div>
    );
  }
}

HistorialCorrespondence.propTypes = {};

export default HistorialCorrespondence;
