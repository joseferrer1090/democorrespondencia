import { EXTERNAL_CORRESPONDENCE_PAGINATION } from "./../../services/EndPoints";

export const loadCorrespondenceData = async (token) => {
  const responses = await fetch(`${EXTERNAL_CORRESPONDENCE_PAGINATION}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const correspondences = await responses.json();
  console.log(correspondences);
  return correspondences;
};
