import {
  OBTENER_DATA_CORRESPONDENCIA_EXTERNA,
  OBTENER_DATA_CORRESPONDENCIA_EXTERNA_ERROR,
  OBTENER_DATA_CORRESPONDENCIA_EXTERNA_EXITO,
} from "./../types";

const initialState = {
  dataCorrespondece: {},

  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_DATA_CORRESPONDENCIA_EXTERNA:
      return {
        ...state,
        dataCorrespondece: action.payload,
        error: false,
      };

    case OBTENER_DATA_CORRESPONDENCIA_EXTERNA_ERROR:
      return {
        ...state,
        dataCorrespondece: {},
        error: true,
      };
    case OBTENER_DATA_CORRESPONDENCIA_EXTERNA_EXITO:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
}
