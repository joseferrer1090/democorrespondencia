import {
  OBTENER_DATOS_STICKER,
  OBTENER_DATOS_STICKER_EXITO,
  OBTENER_DATOS_STICKER_ERROR,
} from "./../types/index";

import { STICKER_ALL } from "./../services/EndPoints";
import { decode } from "jsonwebtoken";

// INICIO DE LA FUNCION PRINCIPAL PARA OBTENER LOS STICKERS
export function obtenerStickers(stickers) {
  return (dispatch) => {
    dispatch(comenzarDescargaSticker());
    fetch(`${STICKER_ALL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(comenzarDescargaStickerExito(response));
        console.log(response);
      })
      .catch((err) => {
        dispatch(comenzarDescargaStickerError());
        console.log(`Error => ${err}`);
      });
  };
}

const comenzarDescargaSticker = () => ({
  type: OBTENER_DATOS_STICKER,
});

const comenzarDescargaStickerExito = (stickers) => ({
  type: OBTENER_DATOS_STICKER_EXITO,
  payload: stickers,
});

const comenzarDescargaStickerError = () => ({
  type: OBTENER_DATOS_STICKER_ERROR,
});
// FIN DE LA FUNCION PRINCIPAL MOSTRAR LOS STICKERS EN LA TABLA
