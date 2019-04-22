import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderInbox from "./../../../Header/HeaderInbox";
import SideBarInbox from "./../../../Sidebar/SidebarInboxComponent";
import { Card } from "reactstrap";

class RelatedUsersCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <HeaderInbox />
        <div className="col-md-12">
          <div
            style={{
              minHeight: "600px",
              marginTop: "0px"
            }}
          >
            <div className="row">
              <SideBarInbox />
              <div className="col-md-10" style={{ padding: "0px " }}>
                <Card body>
                  <p>Probando</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RelatedUsersCorrespondence.propTypes = {};

export default RelatedUsersCorrespondence;
