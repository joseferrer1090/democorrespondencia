import React, {
  Fragment,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody, Alert } from "reactstrap";
import PropTypes from "prop-types";
import { PRINT_STICKER } from "../../../../../../../../services/EndPoints";
import { ErrorMessage } from "formik";

const ModalPrintBarcode = forwardRef((props, ref) => {
  const [modal, setModal] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setModal(props.ModalPrint);
    console.log(props.ModalPrint);
  }, [props.ModalPrint]);

  useImperativeHandle(ref, () => ({
    togglePrint() {
      setModal(!modal);
    },
  }));

  const printSticker = () => {
    const { auth, id } = props;
    fetch(PRINT_STICKER, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
      },
      body: JSON.stringify({
        id,
        print: true,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success === true) {
          props.nextStep(false);
          setAlertSuccess(true);
        } else {
          response.errors.map((aux, idx) => {
            return <li>{setErrorMessage(aux)}</li>;
          });
          setAlertError(true);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Fragment>
      <Modal isOpen={modal}>
        <ModalHeader>
          {" "}
          <i className="fa fa-print" /> Impresión del sticker
        </ModalHeader>
        <Fragment>
          <form className="form">
            <ModalBody>
              <p className="text-center font-weight-bold">
                <i style={{ color: "blue" }} className="fa fa-info-circle" /> Si
                confirma la impresión del sticker procederá a la ventana de
                impresión y posteriormente podrá continuar a adjuntar el
                documento.{" "}
              </p>
              {alertSuccess === true ? (
                <Alert color="success">
                  <h4 className="alert-heading">
                    {" "}
                    <i
                      className="fa fa-check-circle"
                      style={{ color: "green" }}
                    />{" "}
                    Se imprimió el sticker satisfactoriamente!
                  </h4>
                  Se confirmo la impresión del sticker de manera exitosa,
                  proceda a adjuntar el documento.
                </Alert>
              ) : alertError === true ? (
                <Alert color="danger">
                  <h4 className="alert-heading">
                    {" "}
                    <i
                      className="fa fa-times-circle-o"
                      style={{ color: "red" }}
                    />{" "}
                    Ocurrio un error.
                  </h4>
                  Ha ocurrido un error en confirmar la impresión del sticker,
                  por favor inténtelo nuevamente.
                  <br />
                  <ul>
                    <i
                      className="fa fa-exclamation-triangle"
                      style={{ color: "red" }}
                    />{" "}
                    {errorMessage}
                  </ul>
                </Alert>
              ) : null}
            </ModalBody>
            <ModalFooter>
              <button
                type="submit"
                className="btn btn-success btn-sm"
                onClick={(e) => {
                  e.preventDefault();
                  printSticker();
                  props.confirm(true);
                  setTimeout(() => {
                    props.confirm(false);
                  }, 500);
                }}
                // disabled={this.state.spinnerDelete}
              >
                <div>
                  <i className="fa fa-check" /> Confirmar
                </div>
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  closeModal();
                }}
              >
                <i className="fa fa-times" /> Cerrar
              </button>
            </ModalFooter>
          </form>
        </Fragment>
      </Modal>
    </Fragment>
  );
});

ModalPrintBarcode.propTypes = {
  modalprint: PropTypes.bool.isRequired,
  ModalPrint: PropTypes.bool.isRequired,
  confirm: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  auth: PropTypes.string.isRequired,
};

export default ModalPrintBarcode;
