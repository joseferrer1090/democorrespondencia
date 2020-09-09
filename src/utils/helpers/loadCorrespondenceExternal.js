import {
  EXTERNAL_CORRESPONDENCE_PAGINATION,
  EXTERNAL_CORRESPONDENCE_PAGINATION_PENDING_TO_DO,
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

export const loadPagination = async (token, page, size) => {
  page -= 1;
  const responses = await fetch(
    `http://localhost:8090/api/sgdea/service/external/correspondence/received/pagination/pending/to/do?page=${page}&size=${10}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  const correspondencepeding = await responses.json();
  const content = correspondencepeding.content;
  return { correspondencepeding, content };
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
