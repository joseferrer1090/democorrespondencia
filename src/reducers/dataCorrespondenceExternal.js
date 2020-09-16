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
    countreceived: => numero de correspondencia recibida con el endpoint
    countpending: => numero de correspondencia pendiente con el endpoint
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
  PAGINACION_BANDEJA_RECIBIDA,
  PAGINACION_BANDEJA_PENDIENTE,
  DATA_ALL_PAGINACION_PENDIENTE,
  DATA_ALL_PAGINACION_RECIBIDA,
} from "../types";

const initalState = {
  alldata: [],
  received: [],
  pending: [],
  totalPages: 0,
  totalElements: 0,
  size: 0,
  number: 0,
  numerorecibidas: 0,
  numeropendientes: 0,
  valuesearch: null,
  paginationReceived: [],
  paginationPending: [],
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
        number: 1,
        size: 0,
      };

    case OBTENER_DATA_EXTERNA_CORRESPONDENCE_EXITO:
      return {
        ...state,
        received: action.payload.content,
        totalPages: action.payload.totalPages,
        totalElements: action.payload.totalElements,
        size: action.payload.size,
        number: action.payload.number,
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
        number: 0,
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
        alldata: !!action.payload
          ? state.alldata.filter((item) =>
              JSON.stringify(item)
                .toLowerCase()
                .includes(`${action.payload}`.toLowerCase())
            )
          : [...state.pending],
      };

    case "RESET_BUSQUEDA_CORRESPONDENCIA_PENDIENTE":
      return {
        ...state,
        alldata: [...state.pending].filter,
      };
    case PAGINACION_BANDEJA_RECIBIDA:
      return {
        ...state,
        paginationReceived: action.payload.content,
        totalPages: action.payload.totalPages,
        totalElements: action.payload.totalElements,
        size: action.payload.size,
        number: action.payload.number + 1,
      };
    case PAGINACION_BANDEJA_PENDIENTE:
      return {
        ...state,
        paginationPending: action.payload.content,
        totalPages: action.payload.totalPages,
        totalElements: action.payload.totalElements,
        size: action.payload.size,
        number: action.payload.number + 1,
      };

    case DATA_ALL_PAGINACION_RECIBIDA:
      return {
        ...state,
        alldata: [...state.paginationReceived],
      };

    case DATA_ALL_PAGINACION_PENDIENTE:
      return {
        ...state,
        alldata: [...state.paginationPending],
      };
    default:
      return state;
  }
};
