import React, { Component } from "react";
import PropTypes from "prop-types";
import Files from "react-files";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import { css } from "glamor";
import { ATTACHED } from "../../../../../../services/EndPoints";
import { obtenerDataVerRadicacion } from "./../../../../../../actions/step3ActionsFiling";
import "../react-list.css";

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: props.authorization,
      files: [],
      visible: false,
      error: "",
      goToStep4: false,
    };
  }

  toggle = () => {
    this.setState({ visible: !this.state.visible });
  };
  getBase64 = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const BASE64_MARKER = ";base64,";
      const base64Index =
        reader.result.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
      const base64 = reader.result.substring(base64Index);
      document
        .getElementById("pdfViewer")
        .contentWindow.openFileFromBase64(base64);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  onFilesChange = (files) => {
    this.setState({
      files,
    });
  };

  onFilesError = (error, files) => {
    console.log("error code " + error.code + ":" + error.message);
  };

  filesRemoveOne = (file) => {
    this.refs.files.removeFile(file);
  };

  filesRemoveAll = () => {
    this.refs.files.removeFiles();
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    const idFiling = this.props.idFiling;
    console.log(idFiling);
    const auth = this.props.authorization;
    const file = this.state.files[0];
    const formData = new FormData();
    formData.set("file", file);
    axios
      .post(`${ATTACHED}${idFiling}`, formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: "Bearer " + auth,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            goToStep4: true,
          });
          this.props.getDataViewFiling(response.data.data);
          toast.success("Se adjunto el documento con éxito.", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            className: css({
              marginTop: "60px",
            }),
          });
        }
        setTimeout(() => {
          toast.dismiss();
          this.refs.files.removeFile(file);
          if (this.state.goToStep4 === true) {
            this.props.nextStep();
          }
        }, 5000);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          console.log(error.response.data);
          toast.error("Error al adjuntar el documento. Inténtelo nuevamente.", {
            position: toast.POSITION.TOP_RIGHT,
            className: css({
              marginTop: "60px",
            }),
          });
        } else if (error.response.status === 500) {
          console.log(error.response.data);
          toast.error(
            "Ocurrio un problema interno al adjuntar el documento. Por favor inténtelo nuevamente.",
            {
              position: toast.POSITION.TOP_RIGHT,
              className: css({
                marginTop: "60px",
              }),
            }
          );
        } else {
          toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            className: css({
              marginTop: "60px",
            }),
          });
        }

        setTimeout(() => {
          this.refs.files.removeFile(file);
          toast.dismiss();
        }, 5000);
      });
  };

  render() {
    if (this.state.files.length > 0) {
      this.getBase64(this.state.files[0]);
    }
    return (
      <div className="animated fadeIn">
        <ToastContainer autoClose={5000} />
        <form
          onSubmit={(e) => this._handleSubmit(e)}
          encType="multipart/form-data"
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
            <iframe
              id="pdfViewer"
              src="/pdfjs-2.5.207-dist/web/viewer.html"
              width={"100%!"}
              height={"700px"}
            ></iframe>
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
                      <i className="fa fa-save" /> Radicar y visualizar
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

Step3.propTypes = {
  authorization: PropTypes.string.isRequired,
  nextStep: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    idFiling: state.step2ReducerSticker.idFiling,
  };
}

function mapDispatch(dispatch) {
  return {
    getDataViewFiling(data) {
      dispatch(obtenerDataVerRadicacion(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatch, null)(Step3);
