import {
  OBTENER_DATA_EXTERNA_CORRESPONDENCE,
  OBTENER_DATA_EXTERNA_CORRESPONDENCE_EXITO,
  OBTENER_DATA_EXTERNA_CORRESPONDENCE_PENDING,
  OBTENER_DATA_EXTERNA_CORRESPONDENCE_PENDING_EXITO,
  DATA_ALL_CORRESPONDENCE,
  DATA_ALL_CORRESPONDENCE_PENDING,
  NUMERO_ELEMENTOS_RECIBIDOS,
  NUMERO_ELEMENTOS_PENDIENTES,
} from "./../types/index";
import {
  loadCorrespondenceData,
  loadCorrespondenceExternalPendingData,
  loadNumerElementsReceived,
  loadNumberElementsPending,
} from "./../utils/helpers/loadCorrespondenceExternal";

// Funcion principal
export const dataCorrespondence = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    await dispatch(startLoadDataCorrespondence());
    const aux = await loadCorrespondenceData(token);
    dispatch(loadDataCorrespondenceSuccess(aux));
    dispatch(loadDataAll());
  };
};

export const startLoadDataCorrespondence = () => ({
  type: OBTENER_DATA_EXTERNA_CORRESPONDENCE,
});

export const loadDataCorrespondenceSuccess = (data) => ({
  type: { OBTENER_DATA_EXTERNA_CORRESPONDENCE_EXITO, DATA_ALL_CORRESPONDENCE },
  payload: data,
});

export const loadDataAll = () => ({
  type: DATA_ALL_CORRESPONDENCE_PENDING,
});

export const dataNumerReceived = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    const aux = await loadNumerElementsReceived(token);
    dispatch(numberElementReceived(aux));
  };
};

export const numberElementReceived = (data) => ({
  type: NUMERO_ELEMENTOS_RECIBIDOS,
  payload: data,
});

// Funcion Principal para pending
export const dataCorrespondencePending = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    await dispatch(startLoadDataCorrespondenceExternalPending());
    const aux = await loadCorrespondenceExternalPendingData(token);
    dispatch(loadDataCorrespondencePendingSuccess(aux));
    dispatch(loadDataAllPendong());
  };
};

export const startLoadDataCorrespondenceExternalPending = () => ({
  type: OBTENER_DATA_EXTERNA_CORRESPONDENCE_PENDING,
});

export const loadDataCorrespondencePendingSuccess = (data) => ({
  type: OBTENER_DATA_EXTERNA_CORRESPONDENCE_PENDING_EXITO,
  payload: data,
});

export const loadDataAllPendong = () => ({
  type: DATA_ALL_CORRESPONDENCE_PENDING,
});

export const dataNumberPending = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("auth_token");
    const aux = await loadNumberElementsPending(token);
    dispatch(numberElementPending(aux));
  };
};

export const numberElementPending = (data) => ({
  type: NUMERO_ELEMENTOS_PENDIENTES,
  payload: data,
});
