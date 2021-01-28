import { OBTENER_DATA_PLANTILLA } from "./../types";

const initialState = {
  dataTemplate: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_DATA_PLANTILLA:
      return {
        ...state,
        dataTemplate: action.payload,
        error: false,
      };

    default:
      return state;
  }
}
