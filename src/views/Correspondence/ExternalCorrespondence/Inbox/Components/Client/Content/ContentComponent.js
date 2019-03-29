import React, { Component } from "react";
import PropTypes from "prop-types";
import Data from "./../../../../../../../services/correspondencia_externa_recibida_new";
import Data2 from "./../../../../../../../services/data";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data2.data
    };
  }

  ProcessData = () => {
    const auxData = this.state.data.map((aux, id) => {
      return {
        Consecutivo: aux.consecutivo,
        nro_documento: aux.nro_documento,
        Sede: aux.sede,
        Remitente: aux.remitente
      };
    });
  };

  componentDidMount() {
    console.log("Probando el component did mount");
  }

  render() {
    // console.log(this.state.data);
    //this.ProcessData();
    return (
      <main
        role="main"
        className="col-md-12 col-lg-12 col-md-12"
        style={{ border: "1px solid green", padding: "0px" }}
      >
        {/* <DetailsList
          items={this.state.data}
          // setKey="set"
          // selection={this._selection}
          // onItemInvoked={item => window.open(item.WebUrl)}
          // onRenderItemColumn={this._onRenderItemColumn.bind(this)}
          // onRenderMissingItem={() => this._onLoadNextPage()}
        /> */}
      </main>
    );
  }
}

ContentComponent.propTypes = {};

export default ContentComponent;
