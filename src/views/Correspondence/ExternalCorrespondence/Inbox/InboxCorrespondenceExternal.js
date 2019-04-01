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
      <div>
        <div className="" style={{ marginTop: "-25px" }}>
          <HeaderInbox />
        </div>
        <div className="row">
          <SidebarInbox />
          <ContentInbox />
        </div>
      </div>
    );
  }
}

InboxCorrespondenceExternal.propTypes = {};

export default InboxCorrespondenceExternal;
