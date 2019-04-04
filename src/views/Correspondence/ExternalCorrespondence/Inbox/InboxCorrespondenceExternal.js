import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
// import "./../../../../assets/css/custom.css";
import HeaderInbox from "./Components/Client/Header/HeaderInbox";
import SidebarInbox from "./Components/Client/Sidebar/SidebarInboxComponent";
import ContentInbox from "./Components/Client/Content/ContentComponent";

class InboxCorrespondenceExternal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <HeaderInbox />
        <div className="">
          <div className="col-md-12">
            <div
              className=""
              style={{
                minHeight: "600px",
                marginTop: "0px"
              }}
            >
              <div className="row" style={{}}>
                <SidebarInbox />
                <div className="col-md-10" style={{ padding: "0px" }}>
                  <ContentInbox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// style={{ marginTop: "-25px" }}

InboxCorrespondenceExternal.propTypes = {};

export default InboxCorrespondenceExternal;
