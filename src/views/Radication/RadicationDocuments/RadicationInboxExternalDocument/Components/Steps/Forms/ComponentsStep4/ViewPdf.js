import React, { useState, useRef, useEffect } from "react";
import PropTypes from "react";
import { usePdf } from "@mikecousins/react-pdf";
import { Row, Col } from "reactstrap";
import DefaultFile from "../../../../../../../../assets/files/DStep3.pdf";

const MyPdfViewer = (props) => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);
  const [id, setId] = useState(props.id);
  const [filename, setFilename] = useState(props.filename);

  const { pdfDocument, pdfPage } = usePdf({
    file: `http://localhost:8090/api/sgdea/service/external/correspondence/received/filing/attached/view/file/${id}/${filename}`,
    page,
    canvasRef,
    pdfPage,
  });

  const validateValues = () => {
    if (PreValue !== props.id) {
      setPage(1);
    }
  };

  useEffect(() => {
    setId(props.id);
    setFilename(props.filename);
    validateValues();
  }, [props.id, props.filename]);

  const PreviousValues = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });

    return ref.current;
  };
  const PreValue = PreviousValues(props.id);
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
