import {
  OBTENER_DATOS_STICKER,
  OBTENER_DATOS_STICKER_EXITO,
  OBTENER_DATOS_STICKER_ERROR,
} from "./../types/index";

const initialState = {
  datasticker: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_DATOS_STICKER:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case OBTENER_DATOS_STICKER_EXITO:
      return {
        ...state,
        datasticker: action.payload,
        loading: false,
        error: false,
      };
    case OBTENER_DATOS_STICKER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
