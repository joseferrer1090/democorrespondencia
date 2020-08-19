import { EXTERNAL_CORRESPONDENCE_PAGINATION } from "./../../services/EndPoints";

export const loadCorrespondenceExternal = async (token) => {
  await fetch(`${EXTERNAL_CORRESPONDENCE_PAGINATION}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === "400") {
        console.log("Error en la respuesta", response);
      }
    })
    .catch((err) => {
      console.log(`Error => ${err}`);
    });
};
