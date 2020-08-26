import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import Files from "react-files";
import axios from "axios";
import { connect } from "react-redux";
import { css } from "glamor";
import { ATTACHED } from "../../../../../../services/EndPoints";
import "../react-list.css";
import MyPdfViewer from "./Forms/ComponentsStep3/ViewPdf";
import { obtenerDataVerRadicacion } from "./../../../../../../actions/step3ActionsFiling";

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: props.authorization,
      files: [],
      visible: false,
      error: "",
      goToStep4: false,
      filesFromInput: [],
      data64: "",
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

  convertDataURIToBinary = (dataURI) => {
    let i;
    const BASE64_MARKER = ";base64,";
    const base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    const base64 = dataURI.substring(base64Index);
    const raw = window.atob(base64);
    const rawLength = raw.length;
    const array = new Uint8Array(new ArrayBuffer(rawLength));

    for (i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    console.log(array);
    return array;
  };

  getBase64 = (file) => {
    let i;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      // console.log(reader.result);
      const BASE64_MARKER = ";base64,";
      const base64Index =
        reader.result.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
      const base64 = reader.result.substring(base64Index);
      const raw = window.atob(base64);
      const rawLength = raw.length;
      const array = new Uint8Array(new ArrayBuffer(rawLength));

      for (i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
      }

      /* 
     BLOB URL
     const byteCharacters = atob(base64);
      const byteArrays = [];
      const sliceSize = 512;

      for (
        let offset = 0;
        offset < byteCharacters.length;
        offset += sliceSize
      ) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      const blob = new Blob([byteArrays], { type: "application/pdf" });
      const blobUrl = URL.createObjectURL(blob);*/
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  onChangeFromInput = (e) => {
    console.log(e.target.files[0]);
    this.setState({
      filesFromInput: e.target.files[0],
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

        /* MOSTRAR EL MENSAJE DE ERROR DEL BACKEN EN CASO DE CUALQUIER ERROR 
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          className: css({
            marginTop: "60px",
          }),
        });
        */
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
            {/* <iframe
              id="pdfViewer"
              src="/pdfjs-2.5.207-dist/web/viewer.html"
              width={"100%!"}
              height={"700px"}
            ></iframe> */}

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
