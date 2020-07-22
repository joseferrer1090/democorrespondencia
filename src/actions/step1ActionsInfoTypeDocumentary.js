import {
  OBTENER_INFORMACION_ADICIONAL_NUEVA_RADICACION,
  INFO_ADICION_FORM_STEP1,
  ARRAY_USERS_INFO_ADICIONAL_FORM_STEP1,
  RESET_FORM_STEP_1,
  OBTENER_METADATOS_PLANTILLA_BY_TYPE_DOCUMENTARY,
  OBTENER_PLANTILLA_BY_TYPE_DOCUMENTARY,
  OBTENER_METADATOS_ERROR_BY_TYPE_DOCUMENTARY,
} from "./../types";
import {
  TYPE_DOCUMENTARIES_BY_ID,
  GET_METADATA_FOR_TYPE_DOCUMENTARY,
} from "./../services/EndPoints";

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
        dispatch(
          arrayUsersinfoAdicionalFormStep1Radication(
            data.users.map((aux, idx) => {
              return { id: aux.id, name: aux.name };
            })
          )
        );
        dispatch(obtenerInfoAdicionalTipoDocumental());
        dispatch(
          obtenerDataMetadatos(
            data.metadata.map((aux, id) => {
              return {
                id: aux.id,
                defaultValue: aux.defaultValue !== null ? aux.defaultValue : "",
              };
            })
          )
        );
        dispatch(obtenerInfoTemplateByTypeDocumentary(data.metadata));
      })

      .catch((err) => console.log(err));
  };
}

export function obtenerMetadatosByTypeDocumentary(id) {
  const auth = localStorage.getItem("auth_token");
  return (dispatch) => {
    fetch(`${GET_METADATA_FOR_TYPE_DOCUMENTARY}${id}`, {
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
                id: aux.id,
                defaultValue: aux.defaultValue !== null ? aux.defaultValue : "",
              };
            })
          )
        );
        dispatch(obtenerInfoTemplateByTypeDocumentary(data));
      })
      .catch((error) => {
        console.log(`Error => ${error.message}`, error);
        dispatch(clearData());
      });
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

export const resetFormStep1TypeDocumentary = () => ({
  type: RESET_FORM_STEP_1,
});

const obtenerInfoTemplateByTypeDocumentary = (data) => ({
  type: OBTENER_PLANTILLA_BY_TYPE_DOCUMENTARY,
  payload: data,
});

const obtenerDataMetadatos = (metadata) => ({
  type: OBTENER_METADATOS_PLANTILLA_BY_TYPE_DOCUMENTARY,
  payload: metadata,
});
const clearData = () => ({
  type: OBTENER_METADATOS_ERROR_BY_TYPE_DOCUMENTARY,
});
