/* Global State

correspondeData {
    received: [],  => Listo todas las correspondencias del usuarios
    pending: [] => Listo todas las correspondencias pendientes que tenga el usuario
    totalPages: => numero total de paginas
    totalElements: => numero total de elementos
    size: => tamaño por pagina
}
*/

import {
  OBTENER_DATA_EXTERNA_CORRESPONDENCE,
  OBTENER_DATA_EXTERNA_CORRESPONDENCE_EXITO,
} from "../types";

const initalState = {
  received: [],
  pending: [],
  totalPages: 0,
  totalElements: 0,
  size: 0,
};

export const dataCorrespondenceExternal = (state = initalState, action) => {
  switch (action.type) {
    case OBTENER_DATA_EXTERNA_CORRESPONDENCE:
      return {
        ...state,
        received: [],
      };
    case OBTENER_DATA_EXTERNA_CORRESPONDENCE_EXITO:
      return {
        ...state,
        received: { ...action.payload },
      };

    default:
      return state;
  }
};
