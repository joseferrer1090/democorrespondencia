import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";
import SuperTreeview from "react-super-treeview";
import "./../../../../../../../../../node_modules/react-super-treeview/dist/style.css";

const dataTree = [
  {
    id: 1,
    name: "Parent A",
    isExpanded: true
  },
  {
    id: 2,
    name: "Parent B",
    isExpanded: true,

    children: [
      {
        id: 1,
        name: "Child 1"
      },
      {
        id: 2,
        name: "Child 2"
      }
    ]
  }
];

class TagViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTree
    };
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <SuperTreeview
          data={this.state.data}
          onUpdateCb={updatedData => {
            this.setState({ data: updatedData });
          }}
        />
      </div>
    );
  }
}

TagViewer.propTypes = {};

export default TagViewer;
