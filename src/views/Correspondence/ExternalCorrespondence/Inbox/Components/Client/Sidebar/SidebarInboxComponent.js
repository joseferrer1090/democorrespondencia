import React, { Component } from "react";
import { connect } from "react-redux";
import ListComponent from "./component/ListInboxCorrespondence";
import Tags from "./component/TagViewer";

class SidebarInboxComponent extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="col-md-2" style={{ height: "auto ", padding: "0px" }}>
        <nav id="sidebar">
          <div className="sidebar-header">
            <ListComponent />
          </div>
        </nav>
      </div>
    );
  }
}

SidebarInboxComponent.propTypes = {};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, null)(SidebarInboxComponent);
