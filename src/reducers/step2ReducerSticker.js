import {
  DATA_DETAILS_STICKER,
  DATA_TITLE_STICKER,
  OBTENER_ID_RADICACION,
  DATA_BARCODE_STICKER,
} from "./../types";

const initialState = {
  idFiling: "",
  details: [],
  title: "",
  barcode: "",
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_ID_RADICACION:
      return {
        ...state,
        idFiling: action.payload,
        error: false,
      };
    case DATA_DETAILS_STICKER:
      return {
        ...state,
        details: action.payload,
      };
    case DATA_TITLE_STICKER:
      return {
        ...state,
        title: action.payload,
      };
    case DATA_BARCODE_STICKER:
      return {
        ...state,
        barcode: action.payload,
      };
    default:
      return state;
  }
}
