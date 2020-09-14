import {
  AGREGAR_ANOTACION_CORRESPONDENCIA,
  LISTA_ANOTACIONES,
  NUMERO_ANOTACIONES,
} from "./../types/index";

import {
  loadCountNumberAnottations,
  loadDataNoveltiesAnottations,
} from "./../utils/helpers/anottations";

// FUNCION PRINCIPAL DE ANOTACIONES
export const loadNumberAnottations = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    const aux = await loadCountNumberAnottations(token);
    dispatch(setCountAnottations(aux));
  };
};

const setCountAnottations = (data) => ({
  type: NUMERO_ANOTACIONES,
  payload: data,
});

export const loadDataAnottations = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    const aux = await loadDataNoveltiesAnottations(token);
    dispatch(setAnottations(aux.content));
  };
};

const setAnottations = (data) => ({
  type: LISTA_ANOTACIONES,
  payload: data,
});

//FIN
