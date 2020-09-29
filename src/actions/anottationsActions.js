import { identity } from "lodash";
import {
  AGREGAR_ANOTACION_CORRESPONDENCIA,
  LISTA_ANOTACIONES,
  NUMERO_ANOTACIONES,
  ACTIVE_ANOTTATIONS,
  DATA_ALL_ANOTTATIONS,
  BUSCAR_ANOTACION,
} from "./../types/index";

import {
  loadCountNumberAnottations,
  loadDataNoveltiesAnottations,
  PaginationAnottations,
  dataSelectConglomerado,
  dataSelectEmpresa,
} from "./../utils/helpers/anottations";

import { setActiveAnottations } from "./sidebarStatusAction";

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
    dispatch(dataallanottations(aux.content));
    dispatch(setActiveAnottations());
  };
};

const setAnottations = (data) => ({
  type: LISTA_ANOTACIONES,
  payload: data,
});

const dataallanottations = (data) => ({
  type: DATA_ALL_ANOTTATIONS,
  payload: data,
});
//FIN

export const filterDataAnottation = (data) => ({
  type: BUSCAR_ANOTACION,
  payload: data,
});

export const loadPaginationAnottations = (page) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    const aux = await PaginationAnottations(token, page);
    dispatch(loadDataPaginationAnottations(aux));
    dispatch(loadDataAllPaginationAnottation());
  };
};

export const loadDataPaginationAnottations = (data) => ({
  type: "PAGINACION_BANDEJA_ANOTACIONES",
  payload: data,
});

export const loadDataAllPaginationAnottation = () => ({
  type: "DATA_ALL_PAGINACION_ANOTACIONES",
});

// SELECT CONGLOMERADO
export const loadDataConglomeradoSelect = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    const aux = await dataSelectConglomerado(token);
    dispatch(loadDataConglomerado(aux));
  };
};

const loadDataConglomerado = (data) => ({
  type: "DATA_CONGLOMERADO",
  payload: data,
});

export const dataSelectedConglomerado = (data) => ({
  type: "DATA_CONGLOMERATE_VALUE",
  payload: data,
});
//FIN

// SELECT EMPRESA
export const loadDataEmpresa = (idconglomerado) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    const aux = await dataSelectEmpresa(token, idconglomerado);
    dispatch(dataSelectedEmpresa(aux));
  };
};

export const dataSelectedEmpresa = (data) => ({
  type: "DATA_EMPRESA",
  payload: data,
});

export const dataSelectedEmpresaValue = (data) => ({
  type: "DATA_EMPRESA_VALUE",
  payload: data,
});

// FIN
