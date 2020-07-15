import {
  OBTENER_INFORMACION_ADICIONAL_NUEVA_RADICACION,
  INFO_ADICION_FORM_STEP1,
  RESET_FORM_STEP_1,
} from "./../types";

const initialState = {
  infoAdditional: {},
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_INFORMACION_ADICIONAL_NUEVA_RADICACION:
      return {
        ...state,
        error: false,
      };
    case INFO_ADICION_FORM_STEP1:
      return {
        ...state,
        infoAdditional: action.payload,
        error: false,
      };
    case RESET_FORM_STEP_1:
      return {
        ...state,
        infoAdditional: {},
        error: false,
      };
    default:
      return state;
  }
}
