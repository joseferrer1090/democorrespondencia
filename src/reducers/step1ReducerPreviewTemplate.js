import {
  OBTENER_METADATOS_PLANTILLA,
  OBTENER_INFO_PLANTILLA,
  OBTENER_METADATOS_ERROR,
  RESET_FORM_STEP_1,
  OBTENER_PLANTILLA_BY_TYPE_DOCUMENTARY,
  OBTENER_METADATOS_PLANTILLA_BY_TYPE_DOCUMENTARY,
} from "./../types";

const initialState = {
  template: [],
  idMetadata: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
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
    case OBTENER_METADATOS_PLANTILLA:
      return {
        ...state,
        idMetadata: action.payload,
        error: false,
      };
    case OBTENER_INFO_PLANTILLA:
      return {
        ...state,
        template: action.payload,
        error: false,
      };
    case OBTENER_METADATOS_ERROR:
      return {
        ...state,
        template: [],
        idMetadata: [],
        error: true,
      };
    case RESET_FORM_STEP_1:
      return {
        ...state,
        template: [],
        idMetadata: [],
        error: true,
      };
    default:
      return state;
  }
}
