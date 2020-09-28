import {
  COUNT_RECEIVED_PENDING,
  COUNT_NOVELTIES_ANNOTATIONS,
  COUNT_RECEIVED,
} from "./../../services/EndPoints";

//NUMERO DE CORRESPONDENCIA RECIBIDA
export const countDataCorrespondenceReceived = async (token) => {
  const responses = await fetch(`${COUNT_RECEIVED}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return await responses.json();
};
//FIN

// NUMERO DE CORRESPONDENCIA PENDIENTE
export const countDataCorrespondencePending = async (token) => {
  const responses = await fetch(`${COUNT_RECEIVED_PENDING}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return await responses.json();
};
// FIN

// NUMERO DE ANOTACIONES
export const countDataAnottations = async (token) => {
  const responses = await fetch(`${COUNT_NOVELTIES_ANNOTATIONS}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return await responses.json();
};
// FIN
