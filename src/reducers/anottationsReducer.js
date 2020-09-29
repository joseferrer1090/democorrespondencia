/* GlobalState
    anottationsReducer: {
        alldata: [] => estado para generar una copia del estado origina y poder realizar operaciones
        anotattions: [] => lista de anotaciones
        totalPages: => numero total de paginas
        totalElements: => numero total de elementos
        countanotattions: 0 => numero de anotaciones
        size: => tamaño por pagina
        active: => Si el usuario activa en el sidebar
        valuesearch: => valor que se captura en un input para realizar la busqueda. 
        paginationAnottation: => paginacion de anotaciones
        number: => numero
        dataConglomerado: [] => siempre esta lleno de informacion
        valueconglomerado: "" => valor seleccionado con el onChange
    }
*/

import {
  AGREGAR_ANOTACION_CORRESPONDENCIA,
  LISTA_ANOTACIONES,
  NUMERO_ANOTACIONES,
  DATA_ALL_ANOTTATIONS,
  BUSCAR_ANOTACION,
} from "./../types/index";

const initialState = {
  alldata: [],
  anottations: [],
  countanotattions: null,
  active: null,
  valuesearch: null,
  totalElements: 0,
  totalPages: 0,
  size: 0,
  paginationAnottation: [],
  number: 0,
  dataConglomerado: [],
  valueconglomerado: "",
};

export const dataAnottationsReducers = (state = initialState, action) => {
  switch (action.type) {
    case LISTA_ANOTACIONES:
      return {
        ...state,
        anottations: action.payload,
      };

    case NUMERO_ANOTACIONES:
      return {
        ...state,
        countanotattions: action.payload,
      };

    case DATA_ALL_ANOTTATIONS:
      return {
        ...state,
        alldata: [...state.anottations],
        active: "ANOTTATIONS",
      };

    case BUSCAR_ANOTACION:
      return {
        ...state,
        valuesearch: action.payload,
        alldata: !!action.payload
          ? state.alldata.filter((item) =>
              JSON.stringify(item)
                .toLowerCase()
                .includes(`${action.payload}`.toLowerCase())
            )
          : [...state.anottations],
      };

    case "PAGINACION_BANDEJA_ANOTACIONES":
      return {
        ...state,
        paginationAnottation: action.payload.content,
        totalPages: action.payload.totalPages,
        totalElements: action.payload.totalElements,
        size: action.payload.size,
        number: action.payload.number + 1,
      };

    case "DATA_ALL_PAGINACION_ANOTACIONES":
      return {
        ...state,
        alldata: [...state.paginationAnottation],
      };

    case "DATA_CONGLOMERADO":
      return {
        ...state,
        dataConglomerado: action.payload,
      };

    case "DATA_CONGLOMERATE_VALUE":
      return {
        ...state,
        valueconglomerado: action.payload,
      };

    default:
      return state;
  }
};
