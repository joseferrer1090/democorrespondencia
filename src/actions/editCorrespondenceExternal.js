import {
  OBTENER_DATA_CORRESPONDENCIA_EXTERNA,
  OBTENER_DATA_CORRESPONDENCIA_EXTERNA_ERROR,
  OBTENER_DATA_CORRESPONDENCIA_EXTERNA_EXITO,
} from "./../types";
import { getDataCorrespondenciaExterna } from "./../utils/helpers/getCorrespondenceExternal";

export const obtenerDataCorrespondenciaExterna = (id) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    const aux = await getDataCorrespondenciaExterna(token, id);
    dispatch(dataCorrespondenciaExterna(aux));
  };
};

const dataCorrespondenciaExterna = (data) => ({
  type: OBTENER_DATA_CORRESPONDENCIA_EXTERNA,
  payload: data,
});

const dataCorrespondenciaExternaError = () => ({
  type: OBTENER_DATA_CORRESPONDENCIA_EXTERNA_ERROR,
});
const dataCorrespondenciaExternaExito = () => ({
  type: OBTENER_DATA_CORRESPONDENCIA_EXTERNA_EXITO,
});
