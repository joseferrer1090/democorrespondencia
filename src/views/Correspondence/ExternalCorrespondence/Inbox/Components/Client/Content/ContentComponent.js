import React, { Component } from "react";
import PropTypes from "prop-types";
import { DetailsList } from "office-ui-fabric-react";
import { Spinner, MessageBar, MessageBarType } from "office-ui-fabric-react";
import Data from "./../../../../../../../services/correspondencia_externa_recibida_new";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: Data
    });
  }

  ProcessData = () => {
    const auxData = this.state.data;
    console.log(auxData);
  };

  render() {
    // console.log(this.state.data);
    this.ProcessData();
    return (
      <main
        role="main"
        className="col-md-12 col-lg-12"
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
