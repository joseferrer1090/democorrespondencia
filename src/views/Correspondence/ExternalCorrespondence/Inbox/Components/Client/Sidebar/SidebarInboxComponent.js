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
                    name: "Correspondencia",
                    url: "",
                    links: [
                      {
                        name: "Recibida",
                        url:
                          "http://localhost:3001/#/correspondence/external/recibida",
                        key: "key1"
                      },
                      {
                        name: "Despachada",
                        url:
                          "http://localhost:3001/#/correspondence/external/recibida",
                        key: "key2"
                      }
                    ],
                    isExpanded: true
                  },
                  {
                    name: "Consultar",
                    url: "http://example.com",
                    key: "key3",
                    isExpanded: true
                  }
                ]
              }
            ]}
            onLinkClick={this.onLinkClick}
            expandedStateText={"expanded"}
            collapsedStateText={"collapsed"}
            expandButtonAriaLabel={"Expand or collapse"}
          />
        </div>
      </div>
    );
  }
}

SidebarInboxComponent.propTypes = {};

export default SidebarInboxComponent;
