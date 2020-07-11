import {
  OBTENER_METADATOS_PLANTILLA,
  OBTENER_INFO_PLANTILLA,
  OBTENER_METADATOS_ERROR,
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
      })
      .catch((error) => {
        console.log(`Error => ${error.message}`, error);
        dispatch(clearData());
      });
  };
}

const obtenerDataMetadatos = (metadata) => ({
  type: OBTENER_METADATOS_PLANTILLA,
  payload: metadata,
});
const obtenerInfoTemplate = (data) => ({
  type: OBTENER_INFO_PLANTILLA,
  payload: data,
});
const clearData = () => ({
  type: OBTENER_METADATOS_ERROR,
});
