import {
  EXTERNAL_CORRESPONDENCE_PAGINATION,
  EXTERNAL_CORRESPONDENCE_PAGINATION_PENDING_TO_DO,
} from "./../../services/EndPoints";

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
