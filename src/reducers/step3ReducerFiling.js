import { OBTENER_DATA_VISUALIZAR_RADICACION } from "./../types";

const initialState = {
  data: {},
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_DATA_VISUALIZAR_RADICACION:
      return {
        ...state,
        data: action.payload,
        error: false,
      };
    default:
      return state;
  }
}
