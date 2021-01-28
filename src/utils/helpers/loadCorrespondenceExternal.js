import {
  EXTERNAL_CORRESPONDENCE_PAGINATION,
  EXTERNAL_CORRESPONDENCE_PAGINATION_PENDING_TO_DO,
  PAGINATION_EXTERNAL_CORRESPONDENCE_RECEIVED,
  PAGINATION_EXTERNAL_CORRESPONDENCE_PENDING,
} from "./../../services/EndPoints";

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
  const { totalPages, totalElements, size, number } = correspondences;
  const content = correspondences.content;
  return { totalElements, totalPages, size, number, content };
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
  return { correspondencespending, totalPages, size, totalElements, content };
};
// FIN

// PAGINACIÓN EN LOS TIPOS DE CORRESPONDENCIAS
export const PaginationReceived = async (token, page) => {
  page -= 1;
  const responses = await fetch(
    `${PAGINATION_EXTERNAL_CORRESPONDENCE_RECEIVED}?page=${page}&size=${10}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  const correspondenceReceived = await responses.json();
  const { totalPages, totalElements, size, number } = correspondenceReceived;
  const content = correspondenceReceived.content;
  return { totalElements, totalPages, size, number, content };
};

export const PaginationPending = async (token, page) => {
  page -= 1;
  const responses = await fetch(
    `${PAGINATION_EXTERNAL_CORRESPONDENCE_PENDING}?page=${page}&size=${10}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  const correspondencePending = await responses.json();
  const { totalPages, totalElements, size, number } = correspondencePending;
  const content = correspondencePending.content;
  return { totalElements, totalPages, size, number, content };
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
  const { totalElements } = numberelementpending;
  return { numberelementpending, totalElements };
};

// FIN
