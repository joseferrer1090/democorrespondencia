import React, { Component } from "react";
import { CommandBar } from "office-ui-fabric-react";
import PropTypes from "prop-types";

class Headerinbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getItems = () => {
    return [
      {
        key: "newItem",
        name: "Nuevo",
        cacheKey: "myCacheKey", // changing this key will invalidate this items cache
        iconProps: {
          iconName: "Add"
        },
        ariaLabel: "New",
        subMenuProps: {
          items: [
            {
              key: "emailMessage",
              name: "Radicar documento",
              iconProps: {
                iconName: "document"
              },
              "data-automation-id": "newEmailButton"
            },
            {
              key: "calendarEvent",
              name: "Radicar trámite",
              iconProps: {
                iconName: "documentation"
              }
            }
          ]
        }
      },
      {
        key: "upload",
        name: "Usabilidad",
        iconProps: {
          iconName: "DocumentManagement"
        },
        onClick: () => console.log("Usabilidad")
      },
      {
        key: "download",
        name: "Exportar",
        iconProps: {
          iconName: "Download"
        },
        onClick: () => console.log("Exportar")
      },
      {
        key: "share",
        name: "Reportes",
        iconProps: {
          iconName: "CRMReport"
        },
        onClick: () => console.log("Reportes")
      }
    ];
  };

  getFarItems = () => {
    return [
      {
        key: "sort",
        name: "Más opciones",
        ariaLabel: "Sort",
        iconProps: {
          iconName: "SortLines"
        },
        onClick: () => console.log("Sort")
      },
      {
        key: "sort",
        name: "Impresión",
        ariaLabel: "Sort",
        iconProps: {
          iconName: "print"
        },
        onClick: () => console.log("Print")
      }
    ];
  };

  render() {
    return (
      <div className="col-md-12" style={{ border: "1px solid black" }}>
        <CommandBar
          items={this.getItems()}
          //   overflowItems={this.getOverlflowItems()}
          //   overflowButtonProps={{ ariaLabel: "More commands" }}
          farItems={this.getFarItems()}
          //   ariaLabel={
          //     "Use left and right arrow keys to navigate between commands"
          //   }
        />
      </div>
    );
  }
}

Headerinbox.propTypes = {};

export default Headerinbox;
