import {
  OBTENER_DATA_TIPO_DOCUMENTAL_EDIT_EXITO,
  DATA_TIPO_DOCUMENTAL_FORM_EDIT,
  OBTENER_METADATOS_PLANTILLA_TIPO_DOCUMENTAL_EDIT,
  OBTENER_PLANTILLA_TIPO_DOCUMENTAL_EDIT,
  OBTENER_METADATOS_TIPO_DOCUMENTAL_EDIT_ERROR,
  OBTENER_DATA_TIPO_DOCUMENTAL_EDIT_ERROR,
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
        dispatch(obtenerDataTipoDocumentalExito());
        dispatch(dataTipoDocumental(data));
        dispatch(
          obtenerDataMetadatos(
            data.metadata.map((aux, id) => {
              return {
                id: aux.idMetadata,
                value: aux.defaultValue !== null ? aux.defaultValue : "",
              };
            })
          )
        );
        dispatch(obtenerInfoTemplateByTypeDocumentary(data.metadata));
      })

      .catch((err) => {
        console.log(err);
        dispatch(clearDataTipoDocumental());
      });
  };
}

export function obtenerMetadatosByTypeDocumentary(id) {
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
        dispatch(
          obtenerDataMetadatos(
            data.metadata.map((aux, id) => {
              return {
                id: aux.idMetadata,
                value: aux.defaultValue !== null ? aux.defaultValue : "",
              };
            })
          )
        );
        dispatch(obtenerInfoTemplateByTypeDocumentary(data.metadata));
      })
      .catch((error) => {
        console.log(`Error => ${error.message}`, error);
        dispatch(clearDataMetadatos());
      });
  };
}

const obtenerDataTipoDocumentalExito = () => ({
  type: OBTENER_DATA_TIPO_DOCUMENTAL_EDIT_EXITO,
});

const dataTipoDocumental = (data) => ({
  type: DATA_TIPO_DOCUMENTAL_FORM_EDIT,
  payload: data,
});

const obtenerInfoTemplateByTypeDocumentary = (data) => ({
  type: OBTENER_PLANTILLA_TIPO_DOCUMENTAL_EDIT,
  payload: data,
});

const obtenerDataMetadatos = (metadata) => ({
  type: OBTENER_METADATOS_PLANTILLA_TIPO_DOCUMENTAL_EDIT,
  payload: metadata,
});

const clearDataMetadatos = () => ({
  type: OBTENER_METADATOS_TIPO_DOCUMENTAL_EDIT_ERROR,
});
const clearDataTipoDocumental = () => ({
  type: OBTENER_DATA_TIPO_DOCUMENTAL_EDIT_ERROR,
});
