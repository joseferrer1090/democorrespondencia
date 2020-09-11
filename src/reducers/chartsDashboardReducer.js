import {
  CONTADOR_CORRESPONDENCIA_RECIBIDA,
  CONTADOR_ANOTACIONES_CORRESPONDENCIA_NOVEDADES,
  CONTADOR_CORRESPONDENCIA_PENDIENTE,
} from "./../types";

const initialState = {
  numberReceived: null,
  numberPending: null,
  numberNoveltiesAnnotations: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CONTADOR_CORRESPONDENCIA_RECIBIDA:
      return {
        ...state,
        numberReceived: action.payload,
      };
    case CONTADOR_CORRESPONDENCIA_PENDIENTE:
      return {
        ...state,
        numberPending: action.payload,
      };
    case CONTADOR_ANOTACIONES_CORRESPONDENCIA_NOVEDADES:
      return {
        ...state,
        numberNoveltiesAnnotations: action.payload,
      };
    default:
      return state;
  }
}
