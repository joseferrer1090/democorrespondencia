import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";

class PreviewStickerConfiguration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            {" "}
            <i className="fa fa-globe" /> Previsualizar Sticer
          </CardHeader>
          <CardBody>
            <p>La Previzualizacio del sticker</p>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default PreviewStickerConfiguration;
