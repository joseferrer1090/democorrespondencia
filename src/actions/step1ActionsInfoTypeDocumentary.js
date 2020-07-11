import {
  OBTENER_INFORMACION_ADICIONAL_NUEVA_RADICACION,
  INFO_ADICION_FORM_STEP1,
  ARRAY_USERS_INFO_ADICIONAL_FORM_STEP1,
} from "./../types";
import { TYPE_DOCUMENTARIES_BY_ID } from "./../services/EndPoints";

export function obtenerDataTipoDocumental(id) {
  const auth = localStorage.getItem("auth_token");
  return (dispatch) => {
    fetch(`${TYPE_DOCUMENTARIES_BY_ID}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(infoAdicionalFormStep1Radication(data));
        dispatch(arrayUsersinfoAdicionalFormStep1Radication(data.users));
        dispatch(obtenerInfoAdicionalTipoDocumental());
      })

      .catch((err) => console.log(err));
  };
}

const obtenerInfoAdicionalTipoDocumental = () => ({
  type: OBTENER_INFORMACION_ADICIONAL_NUEVA_RADICACION,
});

const infoAdicionalFormStep1Radication = (data) => ({
  type: INFO_ADICION_FORM_STEP1,
  payload: data,
});

const arrayUsersinfoAdicionalFormStep1Radication = (data) => ({
  type: ARRAY_USERS_INFO_ADICIONAL_FORM_STEP1,
  payload: data,
});
