import {
  OBTENER_INFORMACION_ADICIONAL_NUEVA_RADICACION,
  INFO_ADICION_FORM_STEP1,
  ARRAY_USERS_INFO_ADICIONAL_FORM_STEP1,
} from "./../types";

const initialState = {
  users: [],
  infoAdditional: {},
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_INFORMACION_ADICIONAL_NUEVA_RADICACION:
      return {
        ...state,
        error: null,
      };
    case INFO_ADICION_FORM_STEP1:
      return {
        ...state,
        infoAdditional: action.payload,
        error: null,
      };
    case ARRAY_USERS_INFO_ADICIONAL_FORM_STEP1:
      return {
        ...state,
        users: action.payload,
        error: null,
      };

    default:
      return state;
  }
}
