import {
  EXTERNAL_CORRESPONDENCE_PAGINATION,
  EXTERNAL_CORRESPONDENCE_PAGINATION_PENDING_TO_DO,
} from "./../../services/EndPoints";
import { numberElementPending } from "../../actions/dataCorrespondenceExternalAction";

// CARGAR LA DATA EN LOS DOS TIPOS DE CORRESPONDENCIAS

export const loadCorrespondenceData = async (token) => {
  const responses = await fetch(`${EXTERNAL_CORRESPONDENCE_PAGINATION}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const correspondences = await responses.json();
  const { totalPages } = correspondences;
  const { size } = correspondences;
  const { totalElements } = correspondences;
  const content = correspondences.content;
  console.log(totalPages, totalElements, size, content);
  return { correspondences, totalPages, totalElements, size, content };
};

export const loadCorrespondenceExternalPendingData = async (token) => {
  const responses = await fetch(
    `${EXTERNAL_CORRESPONDENCE_PAGINATION_PENDING_TO_DO}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  const correspondencespending = await responses.json();
  const { totalPages } = correspondencespending;
  const { size } = correspondencespending;
  const { totalElements } = correspondencespending;
  const content = correspondencespending.content;
  console.log(totalPages);
  return { correspondencespending, totalPages, size, totalElements, content };
};

// FIN

// MOSTRAR LOS NUMEROS DE ELEMENTOS RECIBIDA Y PENDIENTE

export const loadNumerElementsReceived = async (token) => {
  const responses = await fetch(`${EXTERNAL_CORRESPONDENCE_PAGINATION}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const numberelement = await responses.json();
  const { numberOfElements } = numberelement;
  return { numberelement, numberOfElements };
};

export const loadNumberElementsPending = async (token) => {
  const responses = await fetch(
    `${EXTERNAL_CORRESPONDENCE_PAGINATION_PENDING_TO_DO}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  const numberelementpending = await responses.json();
  const { numberOfElements } = numberelementpending;
  console.log(numberOfElements);
  return { numberelementpending, numberOfElements };
};
// FIN
