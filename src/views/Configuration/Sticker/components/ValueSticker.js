import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";

class ValueSticker extends Component {
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
            <i className="fa fa-list" />
            Valores del sticker
          </CardHeader>
          <CardBody>
            <div className="row">
              <div className="col-md-6">
                <div className="card card-body">
                  <p>Occaecat ex eiusmod ut sunt qui culpa Lorem.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-body">
                  <p>Eu excepteur tempor irure consequat sit ex.</p>
                </div>
              </div>
            </div>
            <p>
              Drag and Drop para organizar los valores del sticker y asinar
              nueveos
            </p>
          </CardBody>
          <CardFooter>
            <div className="text-right">
              <button type="button" className="btn btn-secondary btn-sm">
                <i className="fa fa-pencil" /> Asignar valores
              </button>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

ValueSticker.propsTypes = {};

export default ValueSticker;
