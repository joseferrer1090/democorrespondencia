/* GlobalState
    anottationsReducer: {
        anotattions: [] => lista de anotaciones
        countanotattions: 0 => numero de anotaciones   
    }
*/

import {
  AGREGAR_ANOTACION_CORRESPONDENCIA,
  LISTA_ANOTACIONES,
  NUMERO_ANOTACIONES,
} from "./../types/index";

const initialState = {
  anottations: [],
  countanotattions: null,
};

export const dataAnottationsReducers = (state = initialState, action) => {
  switch (action.type) {
    case LISTA_ANOTACIONES:
      return {
        ...state,
        anottations: action.payload,
      };

    default:
      return state;
  }
};
