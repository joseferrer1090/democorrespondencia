import React, {
  Fragment,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import PropTypes from "prop-types";
import { PRINT_STICKER } from "../../../../../../../../services/EndPoints";

const ModalPrintBarcode = forwardRef((props, ref) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(props.ModalPrint);
    console.log(props.ModalPrint);
  }, [props.ModalPrint]);

  useImperativeHandle(ref, () => ({
    togglePrint() {
      setModal(!modal);
      console.log("hola ñerito sebas");
    },
  }));

  // PUT nextStep  TRUE en el response del put

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
      .then((response) => console.log("Success:", response))
      .catch((error) => console.error("Error:", error));
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <Fragment>
      <Modal isOpen={modal}>
        <ModalHeader> Impresión del sticker</ModalHeader>
        <Fragment>
          <form className="form">
            <ModalBody>
              <p className="text-center font-weight-bold">
                <i style={{ color: "blue" }} className="fa fa-info-circle" /> Si
                confirma la impresión del sticker procederá a la ventana de
                impresión y posteriormente podrá continuar a adjuntar el
                documento.{" "}
              </p>
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
                <i className="fa fa-times" /> Cancelar
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
};

export default ModalPrintBarcode;
