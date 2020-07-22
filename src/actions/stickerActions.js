import {
  OBTENER_DATOS_STICKER,
  OBTENER_DATOS_STICKER_EXITO,
  OBTENER_DATOS_STICKER_ERROR,
  OBTENER_STICKER,
  OBTENER_STICKER_EXITO,
  OBTENER_STICKER_ERROR,
} from "./../types/index";

import { STICKER_ALL, STICKER_VIEW } from "./../services/EndPoints";
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

// FUNCION PRINCIPAL PARA OBTENER LA INFORMACION DEL STICKER
export function obtenerSticker(id) {
  let auth = localStorage.getItem("auth_token");
  let username = decode(auth);
  return (dispatch) => {
    dispatch(comenzarSticker());
    fetch(`${STICKER_VIEW}${id}?username=${username.user_name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(stickerexito(response));
      })
      .catch((err) => {
        dispatch(stickererror());
      });
  };
}
const comenzarSticker = () => ({
  type: OBTENER_STICKER,
});

const stickerexito = (sticker) => ({
  type: OBTENER_STICKER_EXITO,
  payload: sticker,
});

const stickererror = () => ({
  type: OBTENER_STICKER_ERROR,
});
// FIN

// FUNCION PRINCIPAL PARA EDITAR LA INFORMACION DEL STICKER

// FIN
