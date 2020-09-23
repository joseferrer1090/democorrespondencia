/* GlobalState
    anottationsReducer: {
        alldata: [] => estado para generar una copia del estado origina y poder realizar operaciones
        anotattions: [] => lista de anotaciones
        countanotattions: 0 => numero de anotaciones   
        active: => Si el usuario activa en el sidebar
    }
*/

import {
  AGREGAR_ANOTACION_CORRESPONDENCIA,
  LISTA_ANOTACIONES,
  NUMERO_ANOTACIONES,
  DATA_ALL_ANOTTATIONS,
} from "./../types/index";

const initialState = {
  alldata: [],
  anottations: [],
  countanotattions: null,
  active: null,
};

export const dataAnottationsReducers = (state = initialState, action) => {
  switch (action.type) {
    case LISTA_ANOTACIONES:
      return {
        ...state,
        anottations: action.payload,
      };

    case NUMERO_ANOTACIONES:
      return {
        ...state,
        countanotattions: action.payload,
      };

    case DATA_ALL_ANOTTATIONS:
      return {
        ...state,
        alldata: [...state.anottations],
        active: "ANOTTATIONS",
      };

    default:
      return state;
  }
};
