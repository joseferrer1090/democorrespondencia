/* Global State
correspondeData {
    received: [],  => Listo todas las correspondencias del usuarios
    pending: [] => Listo todas las correspondencias pendientes que tenga el usuario
}
*/

import {
  OBTENER_DATA_EXTERNA_CORRESPONDENCE,
  OBTENER_DATA_EXTERNA_CORRESPONDENCE_EXITO,
} from "../types";

const initalState = {
  received: [],
  pending: [],
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
