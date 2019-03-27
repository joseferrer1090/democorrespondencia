import React, { Component } from "react";
import PropTypes from "prop-types";
import { DetailsList } from "office-ui-fabric-react";
import Data from "./../../../../../../../services/correspondencia_externa_recibida_new";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data
    };
  }
  render() {
    return (
      <main
        role="main"
        className="col-md-10 col-lg-10"
        style={{ border: "1px solid green", padding: "0px" }}
      >
        <div style={{ width: "auto" }}>
          <DetailsList items={this.state.data} />
        </div>
      </main>
    );
  }
}

ContentComponent.propTypes = {};

export default ContentComponent;
