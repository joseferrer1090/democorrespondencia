import {
  CONTADOR_CORRESPONDENCIA_RECIBIDA,
  CONTADOR_ANOTACIONES_CORRESPONDENCIA_NOVEDADES,
  CONTADOR_CORRESPONDENCIA_PENDIENTE,
} from "./../types";
import {
  COUNT_RECEIVED,
  COUNT_NOVELTIES_ANNOTATIONS,
  COUNT_RECEIVED_PENDING,
} from "./../services/EndPoints";

export function getCountReceived() {
  return (dispatch) => {
    fetch(COUNT_RECEIVED, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
      },
    })
      .then((response) => response.json())
      .then((resp) => {
        dispatch(numberReceived(resp));
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  };
}

export function getCountPending() {
  return (dispatch) => {
    fetch(COUNT_RECEIVED_PENDING, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
      },
    })
      .then((response) => response.json())
      .then((resp) => {
        dispatch(numberPending(resp));
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  };
}

export function getCountNoveltiesAnnotations() {
  return (dispatch) => {
    fetch(COUNT_NOVELTIES_ANNOTATIONS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
      },
    })
      .then((response) => response.json())
      .then((resp) => {
        dispatch(numberNoveltiesAnnotations(resp));
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  };
}

const numberReceived = (number) => ({
  type: CONTADOR_CORRESPONDENCIA_RECIBIDA,
  payload: number,
});

const numberPending = (number) => ({
  type: CONTADOR_CORRESPONDENCIA_PENDIENTE,
  payload: number,
});

const numberNoveltiesAnnotations = (number) => ({
  type: CONTADOR_ANOTACIONES_CORRESPONDENCIA_NOVEDADES,
  payload: number,
});
