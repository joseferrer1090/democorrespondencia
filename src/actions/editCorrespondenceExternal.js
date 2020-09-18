import {OBTENER_DATA_CORRESPONDENCIA_EXTERNA, OBTENER_DATA_CORRESPONDENCIA_EXTERNA_ERROR, OBTENER_DATA_CORRESPONDENCIA_EXTERNA_EXITO } from "./../types";
import {EXTERNAL_CORRESPONDENCE_RECEIVED_PUT} from "../services/EndPoints";

export function obtenerDataCorrespondenciaExterna(id) {
    const auth = localStorage.getItem("auth_token");
    return (dispatch) => {
      fetch(`${EXTERNAL_CORRESPONDENCE_RECEIVED_PUT}${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => response.json())
        .then((data) => {
            dispatch(dataCorrespondenciaExternaExito());
          dispatch(dataCorrespondenciaExterna(data));
        })
        .catch((error) => {
          console.log(`Error => ${error.message}`, error);
          dispatch(dataCorrespondenciaExternaError());
        });
    };
  }

  const dataCorrespondenciaExterna = (data) =>({
      type: OBTENER_DATA_CORRESPONDENCIA_EXTERNA,
      payload:data
  });

 const dataCorrespondenciaExternaError = () => ({
     type: OBTENER_DATA_CORRESPONDENCIA_EXTERNA_ERROR
 });
 const dataCorrespondenciaExternaExito = () => ({
    type: OBTENER_DATA_CORRESPONDENCIA_EXTERNA_EXITO
});