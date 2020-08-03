import React, { useState, useRef, useEffect } from "react";
import PropTypes from "react";
import { usePdf } from "@mikecousins/react-pdf";
import {
  Row,
  Col,
  //  ToastBody, Toast, ToastHeader
} from "reactstrap";
import DefaultFile from "../../../../../../../../assets/files/DefaultStep3.pdf";

const MyPdfViewer = (props) => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(DefaultFile);

  const { pdfDocument, pdfPage } = usePdf({
    file: imagePreviewUrl,
    page,
    canvasRef,
    pdfPage,
  });

  const renderPdfPreview = (files) => {
    let reader = new FileReader();
    let file = files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const validateValues = () => {
    if (props.file.length > 0) {
      renderPdfPreview(props.file);
    } else {
      setImagePreviewUrl(DefaultFile);
      setPage(1);
    }
  };

  useEffect(() => {
    validateValues();
    console.log(props.file);
    console.log(props.file.length);
    console.log(file);
  }, [props.file]);

  return (
    <div>
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <center>
          <nav>
            <Row>
              <Col>
                <button
                  className="btn btn-secondary btn-sm"
                  data-trigger="hover"
                  disabled={page === 1}
                  onClick={(event) => {
                    setPage(1);
                    event.preventDefault();
                  }}
                >
                  {" "}
                  <i className="fa fa-backward" />{" "}
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  data-trigger="hover"
                  disabled={page === 1}
                  onClick={(event) => {
                    setPage(page - 1);
                    event.preventDefault();
                  }}
                >
                  {" "}
                  <i className="fa fa-chevron-left" />{" "}
                </button>
                <button
                  disabled
                  className="btn btn-secondary btn-sm"
                  data-trigger="hover"
                >
                  {`${page} de ${pdfDocument.numPages}`}
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  data-trigger="hover"
                  disabled={page === pdfDocument.numPages}
                  onClick={(event) => {
                    setPage(page + 1);
                    event.preventDefault();
                  }}
                >
                  {" "}
                  <i className="fa fa-chevron-right" />{" "}
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  data-trigger="hover"
                  disabled={page === pdfDocument.numPages}
                  onClick={(event) => {
                    setPage(pdfDocument.numPages);
                    event.preventDefault();
                  }}
                >
                  {" "}
                  <i className="fa fa-forward" />{" "}
                </button>
              </Col>
            </Row>
          </nav>
        </center>
      )}
      <br />
      <center>
        {!pdfDocument && (
          <span>
            <center>
              <div className="p-3 bg my-2 rounded">
                {/* <Toast>
                  <ToastHeader
                  // icon={
                  //   //   <Spinner size="sm" />
                  // }
                  >
                    {props.t("app_emailRequest_modal_preview_title_toast")}
                  </ToastHeader>
                  <ToastBody>
                    <b>
                      {props.t("app_emailRequest_modal_preview_select_file")}
                    </b>
                  </ToastBody>
                </Toast> */}
              </div>
            </center>
          </span>
        )}
        <canvas ref={canvasRef} />
      </center>
    </div>
  );
};
MyPdfViewer.propTypes = {
  // file: PropTypes.array.isRequired,
};
export default MyPdfViewer;
