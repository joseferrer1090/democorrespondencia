import React, { Component, Fragment } from "react";
import PropTypes from "react";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import DropzoneComponent from "react-dropzone-component";
import "./../../../../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "./../../../../../../node_modules/dropzone/dist/min/dropzone.min.css";

const eventHandlers = { addedfile: file => console.log(file) };

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: "pdf"
    };
    this.componentConfig = {
      iconFileTypes: ["pdf"],
      showFileTypeIcon: true,
      postUrl: ""
    };
  }
  render() {
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;

    return (
      <div className="animated fadeIn">
        <div className="col-md-7 offset-2">
          <Card body>
            <div className="row">
              <div className="col-md-12">
                <h4 className="text-muted text-center">
                  Por favor, adjunte el documento escaneado.{" "}
                </h4>
                <div className="row">
                  <div className="col-md-12">
                    <DropzoneComponent />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Step3;
