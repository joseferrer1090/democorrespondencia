import {
    OBTENER_DATA_TIPO_DOCUMENTAL_EDIT_EXITO,
    DATA_TIPO_DOCUMENTAL_FORM_EDIT,
    OBTENER_METADATOS_PLANTILLA_TIPO_DOCUMENTAL_EDIT,
    OBTENER_PLANTILLA_TIPO_DOCUMENTAL_EDIT,
    OBTENER_METADATOS_TIPO_DOCUMENTAL_EDIT_ERROR,
    OBTENER_DATA_TIPO_DOCUMENTAL_EDIT_ERROR
  } from "./../types";
  
  const initialState = {
    dataTypeDocumentary: {},
    template: [],
    idMetadata: [],
    error: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case OBTENER_DATA_TIPO_DOCUMENTAL_EDIT_EXITO:
        return {
          ...state,
          error: false,
        };
      case DATA_TIPO_DOCUMENTAL_FORM_EDIT:
        return {
          ...state,
          dataTypeDocumentary: action.payload,
          error: false,
        };
      case OBTENER_METADATOS_PLANTILLA_TIPO_DOCUMENTAL_EDIT:
        return {
          ...state,
          idMetadata: action.payload,
          error: false,
        };
      case OBTENER_PLANTILLA_TIPO_DOCUMENTAL_EDIT:
        return {
          ...state,
          template: action.payload,
          error: false,
        };
      case OBTENER_METADATOS_TIPO_DOCUMENTAL_EDIT_ERROR:
        return {
          ...state,
          template: [],
          idMetadata: [],
          error: true,
        };
        case OBTENER_DATA_TIPO_DOCUMENTAL_EDIT_ERROR:
            return {
                ...state,
                template: [],
                idMetadata: [],
                error: true,
            }

      default:
        return state;
    }
  }
  