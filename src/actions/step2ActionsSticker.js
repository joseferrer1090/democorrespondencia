import {
  DATA_DETAILS_STICKER,
  DATA_TITLE_STICKER,
  OBTENER_ID_RADICACION,
  DATA_BARCODE_STICKER,
} from "./../types";
import { GENERATE_STICKER } from "./../services/EndPoints";

export function generarSticker(id) {
  const auth = localStorage.getItem("auth_token");
  return (dispatch) => {
    fetch(`${GENERATE_STICKER}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(dataDetailsSticker(data.details));
        dispatch(dataTitleSticker(data.title));
        dispatch(valueBarcode(data.barcode));
      })
      .catch((error) => {
        console.log(`Error => ${error.message}`, error);
      });
  };
}

export function obtenerIdRadicacion(id) {
  return (dispatch) => {
    dispatch(obtenerID(id));
  };
}

const obtenerID = (id) => ({
  type: OBTENER_ID_RADICACION,
  payload: id,
});
const dataDetailsSticker = (details) => ({
  type: DATA_DETAILS_STICKER,
  payload: details,
});
const dataTitleSticker = (title) => ({
  type: DATA_TITLE_STICKER,
  payload: title,
});
const valueBarcode = (barcode) => ({
  type: DATA_BARCODE_STICKER,
  payload: barcode,
});
