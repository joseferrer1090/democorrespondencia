import {
  OBTENER_METADATOS_PLANTILLA_EDIT,
  OBTENER_INFO_PLANTILLA_EDIT,
  OBTENER_METADATOS_ERROR_EDIT,
} from "./../types";
import { GET_METADATA_FOR_TEMPLATE } from "./../services/EndPoints";

export function obtenerMetadatos(id) {
  const auth = localStorage.getItem("auth_token");
  return (dispatch) => {
    fetch(`${GET_METADATA_FOR_TEMPLATE}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(
          obtenerDataMetadatos(
            data.map((aux, id) => {
              return {
                id: aux.idMetadata,
                defaultValue: aux.defaultValue !== null ? aux.defaultValue : "",
              };
            })
          )
        );
        dispatch(obtenerInfoTemplate(data));
        console.log(data);
      })
      .catch((error) => {
        console.log(`Error => ${error.message}`, error);
        dispatch(clearData());
      });
  };
}

export const obtenerDataMetadatos = (metadata) => {
  console.log("por acá metdata");
  return {
    type: OBTENER_METADATOS_PLANTILLA_EDIT,
    payload: metadata,
  };
};
export const obtenerInfoTemplate = (data) => {
  console.log("por acá plantilla");
  return {
    type: OBTENER_INFO_PLANTILLA_EDIT,
    payload: data,
  };
};
const clearData = () => ({
  type: OBTENER_METADATOS_ERROR_EDIT,
});
