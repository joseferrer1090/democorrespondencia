import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderInbox from "./Components/Client/Header/HeaderInbox";
import SidebarInbox from "./Components/Client/Sidebar/SidebarInboxComponent";
import ContentInbox from "./Components/Client/Content/ContentComponent";

const asyncLocalStorage = {
  setItem: async function (key, value) {
    await null;
    return localStorage.setItem(key, value);
  },
  getItem: async function (key) {
    await null;
    return localStorage.getItem(key);
  },
};

class InboxCorrespondenceExternal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: "",
    };
  }
  componentDidMount() {
    this.getDataLocal();
  }

  getDataLocal = () => {
    asyncLocalStorage.getItem("auth_token").then((resp) => {
      this.setState({
        authToken: resp,
      });
    });
  };

  render() {
    const { authToken } = this.state;
    return (
      <div className="animated fadeIn">
        <HeaderInbox />
        {/* <div className=""> */}
        <div className="col-md-12">
          <div
            className=""
            style={{
              minHeight: "600px",
              marginTop: "0px",
            }}
          >
            <div className="row" style={{}}>
              <SidebarInbox />
              <div className="col-md-10" style={{ padding: "0px" }}>
                <ContentInbox authorization={authToken} />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

// style={{ marginTop: "-25px" }}

InboxCorrespondenceExternal.propTypes = {};

export default InboxCorrespondenceExternal;
