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
  dataSelectSede,
  dataSelectDependencia,
  dataGroupUsers,
  userListDependence,
  userListByGroup,
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

// TAB 1

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

// SELECT DE SEDE
export const loadDataSede = (idempresa) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    const aux = await dataSelectSede(token, idempresa);
    dispatch(dataSelectedSede(aux));
  };
};

export const dataSelectedSede = (data) => ({
  type: "DATA_SEDE",
  payload: data,
});

export const dataSelectedSedeValue = (data) => ({
  type: "DATA_SEDE_VALUE",
  payload: data,
});
// FIN

// SELECT DE DEPENDENCIA

export const loadDataDependencia = (idesede) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    const aux = await dataSelectDependencia(token, idesede);
    dispatch(dataSelectedDependencia(aux));
  };
};

export const dataSelectedDependencia = (data) => ({
  type: "DATA_DEPENDENCIA",
  payload: data,
});

export const dataSelectedDependenciaValue = (data) => ({
  type: "DATA_DEPENDENCIA_VALUE",
  payload: data,
});

// FIN

// FIN TAB 1

// TAB 2
export const loadDataSelectGroupUsers = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    const aux = await dataGroupUsers(token);
    dispatch(setDataGroupUsers(aux));
  };
};

export const setDataGroupUsers = (data) => ({
  type: "DATA_GROUP_USER_FILTER",
  payload: data,
});

export const selectedGroupUser = (data) => ({
  type: "DATA_GROUP_USER_VALUE",
  payload: data,
});
// FIN TAB 2

// LISTA DE USUARIO ACTIVOS POR FILTRO
export const loadUserListDependence = (id) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    const aux = await userListDependence(token, id);
    dispatch(setDataUserListDependence(aux));
  };
};

export const setDataUserListDependence = (data) => ({
  type: "DATA_USER_LIST",
  payload: data,
});
// FIN

//LISTA DE USUARIOS POR GRUPO SELECCIONADO

export const loadUserListByGroup = (id) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    const aux = await userListByGroup(token, id);
    dispatch(setDataUserListByGroup(aux));
  };
};

export const setDataUserListByGroup = (data) => ({
  type: "DATA_USER_LIST",
  payload: data,
});
// FIN

//FUNCION PARA AGREGAR USUARIO A LISTA DESTINATARIOS
export const addUserListDestination = (data) => ({
  type: "ADD_USER_LIST_ENABLED",
  payload: data,
});
// FIN

//FUNCION PARA ELIMINAR USUARIO DE LA LISTA DE DESTINATARIOS
export const deleteUserListDestination = (id) => ({
  type: "DELETE_USER_LIST_ENABLED",
  payload: id,
});
//FIN

// DESCRIPCION PARA LA ANOTACIONES
export const addDescriptionAnottation = (data) => ({
  type: "DESCRIPTION_ANOTTATION",
  payload: data,
});
// FIN

// SELECT DE TIPO DE ANOTACION
export const selectTypeAnottation = (data) => ({
  type: "SELECT_TYPE_ANOTTATION",
  payload: data,
});
// FIN

// PAGE FOR ANOTTATION
export const selectPageAnottation = (data) => ({
  type: "PAGE_ANOTTATION",
  payload: data,
});
// FIN
