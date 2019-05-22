import React, { Component, Fragment } from "react";
import PropTypes from "react";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import Files from "react-files";
import "./react-list.css";

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  onFilesChange = files => {
    this.setState(
      {
        files
      },
      () => {
        console.log(this.state.files);
      }
    );
  };

  onFilesError = (error, files) => {
    console.log("error code" + error.code + ":" + error.message);
  };

  filesRemoveOne = file => {
    this.refs.files.removeFile(file);
  };

  filesRemoveAll = () => {
    this.refs.files.removeFiles();
  };

  render() {
    return (
      <div className="animated fadeIn">
        <div className="col-md-7 offset-2">
          <div className="card">
            <div className="card-header"> Adjuntar documento </div>
            <div className="card-body">
              <Files
                ref="files"
                className="flies-dropzone-list"
                style={{ height: "100px" }}
                onChange={this.onFilesChange}
                onError={this.onFilesError}
                accepts={[".pdf"]}
                maxFiles={1}
                clickable
              >
                {this.state.files.length > 0 ? (
                  <div className="files-list">
                    <ul>
                      {this.state.files.map(file => (
                        <li className="files-list-item" key={file.id}>
                          <div className="files-list-item-preview">
                            {file.preview.type === "image" ? (
                              <img
                                className="files-list-item-preview-image"
                                src={file.preview.url}
                              />
                            ) : (
                              <div className="files-list-item-preview-extension">
                                {file.extension}
                              </div>
                            )}
                          </div>
                          <div className="files-list-item-content">
                            <div className="files-list-item-content-item files-list-item-content-item-1">
                              {file.name}
                            </div>
                            <div className="files-list-item-content-item files-list-item-content-item-2">
                              {file.sizeReadable}
                            </div>
                          </div>
                          <div
                            id={file.id}
                            className="files-list-item-remove"
                            onClick={this.filesRemoveOne.bind(this, file)} // eslint-disable-line
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-md-12 mt-4 text-center">
                      <h4 className="text-muted">
                        Por favor, adjunte el documento escaneado.
                      </h4>
                    </div>
                  </div>
                )}
              </Files>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Step3;
