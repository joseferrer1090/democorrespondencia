import React, { Component } from "react";
import ListComponent from "./component/ListInboxCorrespondence";
import Tags from "./component/TagViewer";
class SidebarInboxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="col-md-2"
        style={{ height: "auto ", border: "1px solid black", padding: "0px" }}
      >
        {/* <div className="" style={{ width: "108%" }}>
          <p>Probando apenas para el cambio</p>
        </div> */}
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

export default SidebarInboxComponent;
