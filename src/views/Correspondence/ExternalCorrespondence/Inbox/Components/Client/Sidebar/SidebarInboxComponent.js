import React, { Component } from "react";

class SidebarInboxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="col-md-2"
        style={{ height: "auto ", border: "1px solid black" }}
      >
        {/* <div className="" style={{ width: "108%" }}>
          <p>Probando apenas para el cambio</p>
        </div> */}
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Bootstrap sidebar</h3>
          </div>
        </nav>
      </div>
    );
  }
}

SidebarInboxComponent.propTypes = {};

export default SidebarInboxComponent;
