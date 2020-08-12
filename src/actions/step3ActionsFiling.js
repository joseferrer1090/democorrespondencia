import { OBTENER_DATA_VISUALIZAR_RADICACION } from "./../types";

export function obtenerDataVerRadicacion(data) {
  return (dispatch) => {
    dispatch(obtenerData(data));
  };
}

const obtenerData = (data) => ({
  type: OBTENER_DATA_VISUALIZAR_RADICACION,
  payload: data,
});
