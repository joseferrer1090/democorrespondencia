import {
  AGREGAR_USUARIO_ORIGINAL,
  BORRAR_USUARIO_DISPONIBLE,
  AGREGAR_USUARIO_DISPONIBLE,
  ARRAY_USERS_INFO_ADICIONAL_FORM_STEP1,
  RESET_FORM_STEP_1,
} from "../types";

const initialState = {
  users: [],
  original: "",
  assigned: null,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_USUARIO_DISPONIBLE:
      return {
        ...state,
        users: [...state.users, action.payload],
        assigned: state.original !== "" ? true : false,
        error: false,
      };

    case BORRAR_USUARIO_DISPONIBLE:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        original: "",
        assigned: false,
        error: false,
      };
    case AGREGAR_USUARIO_ORIGINAL: {
      return {
        ...state,
        original: action.payload,
        assigned: true,
        error: false,
      };
    }
    case ARRAY_USERS_INFO_ADICIONAL_FORM_STEP1:
      return {
        ...state,
        users: action.payload,
        error: false,
      };
    case RESET_FORM_STEP_1:
      return {
        ...state,
        users: [],
        original: "",
        assigned: null,
        error: false,
      };
    default:
      return state;
  }
}
