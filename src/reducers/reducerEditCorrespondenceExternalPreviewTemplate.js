import {
  OBTENER_METADATOS_PLANTILLA_EDIT,
  OBTENER_INFO_PLANTILLA_EDIT,
  OBTENER_METADATOS_ERROR_EDIT,
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
    case OBTENER_METADATOS_PLANTILLA_EDIT:
      return {
        ...state,
        idMetadata: action.payload,
        error: false,
      };
    case OBTENER_INFO_PLANTILLA_EDIT:
      return {
        ...state,
        template: action.payload,
        error: false,
      };
    case OBTENER_METADATOS_ERROR_EDIT:
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
