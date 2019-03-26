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
        name: "New",
        cacheKey: "myCacheKey", // changing this key will invalidate this items cache
        iconProps: {
          iconName: "Add"
        },
        ariaLabel: "New",
        subMenuProps: {
          items: [
            {
              key: "emailMessage",
              name: "Email message",
              iconProps: {
                iconName: "Mail"
              },
              "data-automation-id": "newEmailButton"
            },
            {
              key: "calendarEvent",
              name: "Calendar event",
              iconProps: {
                iconName: "Calendar"
              }
            }
          ]
        }
      },
      {
        key: "upload",
        name: "Upload",
        iconProps: {
          iconName: "Upload"
        },
        href: "https://dev.office.com/fabric",
        "data-automation-id": "uploadButton"
      },
      {
        key: "share",
        name: "Share",
        iconProps: {
          iconName: "Share"
        },
        onClick: () => console.log("Share")
      },
      {
        key: "download",
        name: "Download",
        iconProps: {
          iconName: "Download"
        },
        onClick: () => console.log("Download")
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
          //   farItems={this.getFarItems()}
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
