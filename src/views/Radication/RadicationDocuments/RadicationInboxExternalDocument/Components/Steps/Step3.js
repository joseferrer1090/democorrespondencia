import React, { Component, Fragment } from "react";
import PropTypes from "react";
import { Card, CardBody, CardFooter, CardHeader, Alert } from "reactstrap";
import Files from "react-files";
import "../react-list.css";
import MyPdfViewer from "./Forms/ComponentsStep2/ViewPdf";
import { decode } from "jsonwebtoken";

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
    console.log("ENVIANDO ARCHIVO ADJUNTO ...");
    // const {auth} = this.state;
    // const username = decode(auth);
    // const formData = new FormData();
    // formData.append("file", this.state.files);
    // formData.append("username", username.user_name);

    // for (var value of formData.values()) {
    //   console.log(value);
    // }
    // axios
    //   .post(`${USER_UPLOAD_PHOTO}${this.props.id}`, formData, {
    //     headers: {
    //       Authorization: "Bearer " + token,
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((response) => {
    //     // console.log(response.data);
    //     if (response.status === 200) {
    //       this.setState({
    //         alertSuccess: true,
    //       });
    //       setTimeout(() => {
    //         this.setState({
    //           alertSuccess: false,
    //         });
    //       }, 3000);
    //     }
    //   })
    //   .catch((error) => {
    //     // console.log(` ${error.response.status}`);
    //     if (error.response.status === 400) {
    //       this.setState({
    //         alertError400: true,
    //       });
    //       setTimeout(() => {
    //         this.setState({
    //           alertError400: false,
    //         });
    //       }, 3000);
    //     } else if (error.response.status === 500) {
    //       this.setState({
    //         alertError500: true,
    //       });
    //       setTimeout(() => {
    //         this.setState({
    //           alertError500: false,
    //         });
    //       }, 3000);
    //     }
    //   });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <form
          onSubmit={(e) => this._handleSubmit(e)}
          encType={"multipart/form-data"}
        >
          <div className="col-md-9 offset-1">
            <br />
            <div className="card">
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
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Step3;
