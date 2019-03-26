import React, { Component } from "react";
import { Nav, INavLink } from "office-ui-fabric-react";
import PropTypes from "prop-types";

class SidebarInboxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-md-2" style={{ height: "540px " }}>
        <div className="" style={{ width: "108%" }}>
          <Nav
            groups={[
              {
                links: [
                  {
                    name: "Home",
                    url: "http://example.com",
                    links: [
                      {
                        name: "Activity",
                        url: "http://msn.com",
                        key: "key1"
                      },
                      {
                        name: "MSN",
                        url: "http://msn.com",
                        key: "key2"
                      }
                    ],
                    isExpanded: true
                  },
                  {
                    name: "Documents",
                    url: "http://example.com",
                    key: "key3",
                    isExpanded: true
                  },
                  {
                    name: "Pages",
                    url: "http://msn.com",
                    key: "key4"
                  },
                  {
                    name: "Notebook",
                    url: "http://msn.com",
                    key: "key5"
                  },
                  {
                    name: "Communication and Media",
                    url: "http://msn.com",
                    key: "key6"
                  },
                  {
                    name: "News",
                    url: "http://cnn.com",
                    icon: "News",
                    key: "key7"
                  },
                  {
                    name: "Other",
                    url: "http://example.com",
                    links: [
                      {
                        name: "Activity",
                        url: "http://msn.com",
                        key: "key1"
                      },
                      {
                        name: "MSN",
                        url: "http://msn.com",
                        key: "key2"
                      },
                      {
                        name: "News",
                        url: "http://cnn.com",
                        icon: "News",
                        key: "key7"
                      }
                    ],
                    isExpanded: true
                  }
                ]
              }
            ]}
            onLinkClick={this.onLinkClick}
            expandedStateText={"expanded"}
            collapsedStateText={"collapsed"}
            selectedKey={"key3"}
            expandButtonAriaLabel={"Expand or collapse"}
          />
        </div>
      </div>
    );
  }
}

SidebarInboxComponent.propTypes = {};

export default SidebarInboxComponent;
