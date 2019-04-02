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
          <div className="col-md-12" style={{ border: "1px solid green" }}>
            <div
              className=""
              style={{
                minHeight: "600px",
                marginTop: "25px"
              }}
            >
              <div className="row" style={{}}>
                <div className="col-md-2" style={{ border: "1px solid blue" }}>
                  <p>Probando apenas</p>
                </div>
                <div
                  className="col-md-10"
                  style={{ border: "1px solid black" }}
                >
                  <div className="jumbotron">
                    <h1>Navbar example</h1>
                    <p>
                      This example is a quick exercise to illustrate how the
                      default, static and fixed to top navbar work. It includes
                      the responsive CSS and HTML, so it also adapts to your
                      viewport and device.
                    </p>
                    <p>
                      To see the difference between static and fixed top
                      navbars, just scroll.
                    </p>
                    <p>
                      <a
                        className="btn btn-lg btn-primary"
                        href="../../components/#navbar"
                        role="button"
                      >
                        View navbar docs »
                      </a>
                    </p>
                  </div>
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
