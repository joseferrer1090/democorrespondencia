import {
  OBTENER_DATA_EXTERNA_CORRESPONDENCE,
  OBTENER_DATA_EXTERNA_CORRESPONDENCE_EXITO,
  OBTENER_DATA_EXTERNA_CORRESPONDENCE_PENDING,
  OBTENER_DATA_EXTERNA_CORRESPONDENCE_PENDING_EXITO,
} from "./../types/index";
import {
  loadCorrespondenceData,
  loadCorrespondenceExternalPendingData,
} from "./../utils/helpers/loadCorrespondenceExternal";

// Funcion principal
export const dataCorrespondence = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    await dispatch(startLoadDataCorrespondence());
    const aux = await loadCorrespondenceData(token);
    dispatch(loadDataCorrespondenceSuccess(aux));
  };
};

export const startLoadDataCorrespondence = () => ({
  type: OBTENER_DATA_EXTERNA_CORRESPONDENCE,
});

export const loadDataCorrespondenceSuccess = (data) => ({
  type: OBTENER_DATA_EXTERNA_CORRESPONDENCE_EXITO,
  payload: data,
});

// Funcion Principal para pending
export const dataCorrespondencePending = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    await dispatch(startLoadDataCorrespondenceExternalPending());
    const aux = await loadCorrespondenceExternalPendingData(token);
    dispatch(loadDataCorrespondencePendingSuccess(aux));
  };
};

export const startLoadDataCorrespondenceExternalPending = () => ({
  type: OBTENER_DATA_EXTERNA_CORRESPONDENCE_PENDING,
});

export const loadDataCorrespondencePendingSuccess = (data) => ({
  type: OBTENER_DATA_EXTERNA_CORRESPONDENCE_PENDING_EXITO,
  payload: data,
});
