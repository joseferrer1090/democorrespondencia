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

  const [width, setWidth] = useState("2.5");
  const [valuebarcode, setValuebarcode] = useState("barcode_example");
  const [visible, setVisible] = useState(true);

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
              <i className="fa fa-info-circle" /> Por favor, imprima el sticker
              generado por el sistema y péguelo en el documento a radicar y
              procesa a escanear.
            </Alert>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <h4>
                          <strong>{titleSticker}</strong>
                        </h4>
                        <h5>
                          <strong>Correspondencia recibida</strong>
                        </h5>
                      </div>
                      <div className="col-md-10 offset-2 ">
                        <form className="">
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
                              <div className="col-md-12 text-center">
                                <strong className="text-danger">
                                  <i class="fa fa-exclamation-triangle" /> No
                                  hay datos para generar el sticker. Por favor
                                  verifique o inténtelo nuevamente.
                                </strong>
                              </div>
                            </Fragment>
                          )}
                        </form>
                      </div>
                      {detailSticker.length > 0 ? (
                        <div className="col-md-8 offset-1">
                          <Barcode value={valuebarcode} width={width} />
                        </div>
                      ) : null}
                      <br />
                    </div>
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
                <button type="button" className="btn btn-secondary btn-sm">
                  <i className="fa fa-archive" /> Pendiente
                </button>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => printBarCore()}
                >
                  {" "}
                  <i className="fa fa-print" /> Imprimir
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
