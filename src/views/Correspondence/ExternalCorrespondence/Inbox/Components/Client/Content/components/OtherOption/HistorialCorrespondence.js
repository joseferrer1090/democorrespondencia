import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderInbox from "./../../../Header/HeaderInbox";
import SideBarInbox from "./../../../Sidebar/SidebarInboxComponent";
import TimeLine from "./components/TimelineHorizontal";
import { Card } from "reactstrap";

class HistorialCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <HeaderInbox />
        <div className="">
          <div className="col-md-12">
            <p>Probnado </p>
          </div>
        </div>
        <div className="">
          <div className="col-md-12">
            <Card body>
              <TimeLine />
              <div className="row">
                <div className="col-md-6" style={{ border: "1px solid red" }}>
                  <p>Probando</p>
                </div>
                <div className="col-md-6" style={{ border: "1px solid blue" }}>
                  <p>Probnado </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

HistorialCorrespondence.propTypes = {};

export default HistorialCorrespondence;
