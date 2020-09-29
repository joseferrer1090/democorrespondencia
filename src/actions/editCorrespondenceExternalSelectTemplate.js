import { OBTENER_DATA_PLANTILLA } from "./../types";
import { TEMPLATE_STATUS } from "./../services/EndPoints";

export function obtenerDataTemplate(data) {
  return (dispatch) => {
    fetch(`${TEMPLATE_STATUS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
      },
    })
      .then((response) => response.json())
      .then((resp) => {
        dispatch(dataTemplate(resp));
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  };
}
const dataTemplate = (data) => ({
  type: OBTENER_DATA_PLANTILLA,
  payload: data,
});
