import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";
import Barcode from "react-barcode";
import { generarSticker } from "../../../../../../actions/step2ActionsSticker";

const Step2 = (props) => {
  const dispatch = useDispatch();
  const idFiling = useSelector((state) => state.step2ReducerSticker.idFiling);
  const detailSticker = useSelector(
    (state) => state.step2ReducerSticker.details
  );
  const titleSticker = useSelector((state) => state.step2ReducerSticker.title);

  const [width, setWidth] = useState(1);
  const [visible, setVisible] = useState(true);
  // const [valuebarcode, setValuebarcode] = useState();

  const toggle = () => {
    setVisible(!visible);
  };

  const printBarCore = () => {
    let content = document.getElementById("print1");
    let pri = document.getElementById("ifmcontentstoprint").contentWindow;
    pri.document.open();
    pri.document.write(content.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
  };

  const validateIdFiling = () => {
    if (idFiling !== "") {
      dispatch(generarSticker(idFiling));
    } else {
      return null;
    }
  };

  useEffect(() => {
    validateIdFiling();
    console.log(detailSticker);
  }, [idFiling]);
  return (
    <div className="animated fadeIn">
      <div className="col-md-10 offset-1">
        <div className="card">
          <div className="p-2 mb-1 bg-secondary text-dark">Sticker</div>
          <div className="card-body">
            <Alert
              color="warning"
              isOpen={visible}
              toggle={toggle}
              className={"text-center"}
              style={{ fontSize: "16px" }}
            >
              <i className="fa fa-info-circle" /> Por favor imprima el sticker
              generado por el sistema y adjúntelo con el documento a radicar
              posteriormente procesa a escanear.
            </Alert>
            <div className="card">
              <div className="card-body offset-3">
                <div className="row" id="print1">
                  <div className="col-md-12">
                    <div>
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        {titleSticker}
                      </span>
                      <br />
                      {detailSticker.length > 0 ? (
                        <span
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            textAlign: "center",
                            marginLeft: "50px",
                          }}
                        >
                          Correspondencia recibida
                        </span>
                      ) : null}
                    </div>

                    <div
                      className="col-md-10"
                      style={{ marginTop: "15px", marginLeft: "30px" }}
                    >
                      {detailSticker.length > 0 ? (
                        detailSticker.map((aux, idx) => (
                          <Fragment>
                            {" "}
                            <div className="col-md-12 custom-control custom-radio custom-control-inline text-center">
                              <strong>{aux.labelText}</strong> : &nbsp;
                              <label
                                className="control-label"
                                htmlFor="customRadioInline1"
                              >
                                {aux.value}
                              </label>
                            </div>
                          </Fragment>
                        ))
                      ) : (
                        <Fragment>
                          <div
                            className="col-md-12"
                            // style={{ marginRight: "500px" }}
                          >
                            <strong className="text-danger">
                              <i class="fa fa-exclamation-triangle" /> No hay
                              datos para generar el sticker. Por favor verifique
                              o inténtelo nuevamente.
                            </strong>
                          </div>
                        </Fragment>
                      )}
                    </div>
                    {detailSticker.length > 0
                      ? detailSticker.map((aux, idx) => {
                          if (aux.inputId === "filingNumber") {
                            return (
                              <div className="col-md-8  text-center barcode">
                                <Barcode
                                  value={`R-${aux.value}`}
                                  width={width}
                                />
                              </div>
                            );
                          }
                        })
                      : null}
                    <br />
                  </div>

                  <div className="col-md-12">
                    <iframe
                      id="ifmcontentstoprint"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-12  text-center">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => printBarCore()}
                >
                  {" "}
                  <i className="fa fa-print" /> Imprimir
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  onClick={(e) => {
                    props.nextStep();
                    e.preventDefault();
                  }}
                >
                  <div>
                    <i className="fa fa-check" /> Continuar
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
