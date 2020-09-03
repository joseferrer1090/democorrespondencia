/* Global State

correspondeData {
    received: [],  => Listo todas las correspondencias del usuarios
    pending: [] => Listo todas las correspondencias pendientes que tenga el usuario
    totalPages: => numero total de paginas
    totalElements: => numero total de elementos
    size: => tamaño por pagina
    numerorecibidas: => numero de recibidas
    numeropendientes: => numero de pendientes
    valuesearch: => valor para realizar la busqueda
}
*/

import {
  OBTENER_DATA_EXTERNA_CORRESPONDENCE,
  OBTENER_DATA_EXTERNA_CORRESPONDENCE_EXITO,
  OBTENER_DATA_EXTERNA_CORRESPONDENCE_PENDING,
  OBTENER_DATA_EXTERNA_CORRESPONDENCE_PENDING_EXITO,
  DATA_ALL_CORRESPONDENCE,
  DATA_ALL_CORRESPONDENCE_PENDING,
  NUMERO_ELEMENTOS_PENDIENTES,
  NUMERO_ELEMENTOS_RECIBIDOS,
  BUSCAR_CORRESPONDENCIA_PENDIENTE,
} from "../types";

const initalState = {
  alldata: [],
  received: [],
  pending: [],
  totalPages: 0,
  totalElements: 0,
  size: 0,
  numerorecibidas: 0,
  numeropendientes: 0,
  valuesearch: null,
};

export const dataCorrespondenceExternal = (state = initalState, action) => {
  switch (action.type) {
    case OBTENER_DATA_EXTERNA_CORRESPONDENCE:
      return {
        ...state,
        alldata: [],
        received: [],
        pending: [],
        totalPages: 0,
        totalElements: 0,
        size: 0,
      };
    case OBTENER_DATA_EXTERNA_CORRESPONDENCE_EXITO:
      return {
        ...state,
        received: action.payload.content,
        totalPages: action.payload.totalPages,
        totalElements: action.payload.totalElements,
        size: action.payload.size,
      };

    case DATA_ALL_CORRESPONDENCE:
      return {
        ...state,
        alldata: state.received,
      };

    case NUMERO_ELEMENTOS_RECIBIDOS: {
      return {
        ...state,
        numerorecibidas: action.payload.numberOfElements,
      };
    }

    case OBTENER_DATA_EXTERNA_CORRESPONDENCE_PENDING:
      return {
        ...state,
        alldata: [],
        pending: [],
        totalPages: 0,
        totalElements: 0,
        size: 0,
      };

    case OBTENER_DATA_EXTERNA_CORRESPONDENCE_PENDING_EXITO:
      return {
        ...state,
        pending: action.payload.content,
        totalPages: action.payload.totalPages,
        totalElements: action.payload.totalElements,
        size: action.payload.size,
      };

    case DATA_ALL_CORRESPONDENCE_PENDING:
      return {
        ...state,
        alldata: [...state.pending],
      };

    case NUMERO_ELEMENTOS_PENDIENTES:
      return {
        ...state,
        numeropendientes: action.payload.totalElements,
      };

    case BUSCAR_CORRESPONDENCIA_PENDIENTE:
      return {
        ...state,
        valuesearch: action.payload,
        alldata:
          state.valuesearch === "" || state.valuesearch !== null
            ? [
                ...state.alldata.filter(
                  (val) => val.issue.indexOf(state.valuesearch) > -1
                ),
              ]
            : [...state.pending],
      };

    // case BUSCAR_CORRESPONDENCIA_PENDIENTE:
    //   return {
    //     ...state,
    //     valuesearch: action.payload,
    //     alldata:
    //       state.valuesearch === "" || state.valuesearch !== null
    //         ? [
    //             ...state.alldata.filter(
    //               (val) => val.issue.indexOf(state.valuesearch) > -1
    //             ),
    //           ]
    //         : [...state.pending],
    //   };

    case "RESET_BUSQUEDA_CORRESPONDENCIA_PENDIENTE":
      return {
        ...state,
        alldata: [...state.pending],
      };

    default:
      return state;
  }
};
