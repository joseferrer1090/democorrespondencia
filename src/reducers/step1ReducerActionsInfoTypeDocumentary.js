import {
  OBTENER_INFORMACION_ADICIONAL_NUEVA_RADICACION,
  INFO_ADICION_FORM_STEP1,
  RESET_FORM_STEP_1,
  OBTENER_METADATOS_PLANTILLA_BY_TYPE_DOCUMENTARY,
  OBTENER_PLANTILLA_BY_TYPE_DOCUMENTARY,
  OBTENER_METADATOS_ERROR_BY_TYPE_DOCUMENTARY,
} from "./../types";

const initialState = {
  infoAdditional: {},
  template: [],
  idMetadata: [],
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
    case OBTENER_METADATOS_PLANTILLA_BY_TYPE_DOCUMENTARY:
      return {
        ...state,
        idMetadata: action.payload,
        error: false,
      };
    case OBTENER_PLANTILLA_BY_TYPE_DOCUMENTARY:
      return {
        ...state,
        template: action.payload,
        error: false,
      };
    case OBTENER_METADATOS_ERROR_BY_TYPE_DOCUMENTARY:
      return {
        ...state,
        template: [],
        idMetadata: [],
        error: true,
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
