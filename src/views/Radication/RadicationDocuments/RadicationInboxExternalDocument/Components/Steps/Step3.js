import React, { Component, Fragment } from "react";
import PropTypes from "react";
import { Card, CardBody, CardFooter, CardHeader, Alert } from "reactstrap";
import Files from "react-files";
import axios from "axios";
import { connect } from "react-redux";
import { ATTACHED } from "../../../../../../services/EndPoints";
import "../react-list.css";
import MyPdfViewer from "./Forms/ComponentsStep3/ViewPdf";

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: props.authorization,
      files: [],
      visible: false,
      error: "",
    };
  }

  toggle = () => {
    this.setState({ visible: !this.state.visible });
  };

  onFilesChange = (files) => {
    this.setState({
      files,
    });
  };

  onChangeFromInput = (e) => {
    this.setState({
      files: e.target.files[0],
    });
  };

  onFilesError = (error, files) => {
    console.log("error code" + error.code + ":" + error.message);
  };

  filesRemoveOne = (file) => {
    this.refs.files.removeFile(file);
  };

  filesRemoveAll = () => {
    this.refs.files.removeFiles();
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    const auth = this.props.authorization;
    const file = this.state.files;
    const formData = new FormData();
    formData.set("file", file);

    axios
      .post(`${ATTACHED}${"bc2d52c1-b986-4790-af77-d40e741aa3df"}`, formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: "Bearer " + auth,
        },
      })
      .then((response) =>
        response.json().then((data) => {
          console.log(response);
        })
      )
      .catch((err) => {
        console.log(`Error => ${err}`);
      });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <form
          onSubmit={(e) => this._handleSubmit(e)}
          encType="multipart/form-data"
        >
          <div className="col-md-9 offset-1">
            <br />
            <div className="card">
              <div className="card-body">
                {/* <input
                  type="file"
                  accept=".pdf"
                  style={{ height: "100px" }}
                  onChange={(e) => this.onChangeFromInput(e)}
                /> */}
                <input
                  type="file"
                  accept=".pdf"
                  style={{ height: "100px" }}
                  onChange={(e) => this.onChangeFromInput(e)}
                />
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
                        {this.state.files.map((file) => (
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
                          Click para adjuntar el documento escaneado.
                        </h4>
                      </div>
                    </div>
                  )}
                </Files>
              </div>
            </div>
            <MyPdfViewer file={this.state.files} />
          </div>
          <div style={{ height: "80px" }} />

          <div className="card">
            <div className="card-footer">
              <div className="pull-right">
                <button type="submit" className="btn btn-success btn-sm">
                  {false ? (
                    <i className=" fa fa-spinner fa-spin" />
                  ) : (
                    <div>
                      <i className="fa fa-save" /> Guardar
                    </div>
                  )}
                </button>
                &nbsp;
                <button
                  type="submit"
                  className="btn btn-success btn-sm"
                  onClick={(e) => {
                    this.props.nextStep();
                    e.preventDefault();
                  }}
                >
                  {false ? (
                    <i className=" fa fa-spinner fa-spin" />
                  ) : (
                    <div>
                      <i className="fa fa-check" /> Continuar
                    </div>
                  )}
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  onClick={(e) => {
                    console.log(this.state.auth);
                    e.preventDefault();
                  }}
                >
                  <i className="fa fa-check" /> Ver
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    idFiling: state.step2ReducerSticker.idFiling,
  };
}

export default connect(mapStateToProps, null)(Step3);
