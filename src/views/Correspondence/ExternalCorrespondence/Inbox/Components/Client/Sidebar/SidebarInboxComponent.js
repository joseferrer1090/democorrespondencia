import React, { Component } from "react";
import { Nav, INavLink } from "office-ui-fabric-react";
import PropTypes from "prop-types";
import Data from "./../../../../../../../services/correspondencia_externa_recibida_new";

class SidebarInboxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="col-md-2"
        style={{ height: "540px ", border: "1px solid black" }}
      >
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
                          "http://localhost:3001/#/correspondence/external/recibida"
                      },
                      {
                        name: "Despachada",
                        url:
                          "http://localhost:3001/#/correspondence/external/recibida"
                      }
                    ],
                    isExpanded: true
                  },
                  {
                    name: "Consultar",
                    url: "http://example.com"
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
