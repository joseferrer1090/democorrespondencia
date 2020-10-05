import { EXTERNAL_CORRESPONDENCE_RECEIVED } from "../../services/EndPoints";

export const getDataCorrespondenciaExterna = async (
  token,
  idCorrespondence
) => {
  const responses = await fetch(
    `${EXTERNAL_CORRESPONDENCE_RECEIVED}/${idCorrespondence}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  return await responses.json();
};
