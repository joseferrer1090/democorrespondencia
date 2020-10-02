import {
  AGREGAR_USUARIO_ORIGINAL_EDIT,
  BORRAR_USUARIO_DISPONIBLE_EDIT,
  AGREGAR_USUARIO_DISPONIBLE_EDIT,
} from "../types";

const initialState = {
  users: [],
  original: {},
  assigned: null,
  error: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_USUARIO_DISPONIBLE_EDIT:
      return {
        ...state,
        users: [...state.users, action.payload],
        assigned: null,
        error: false,
      };

    case BORRAR_USUARIO_DISPONIBLE_EDIT:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        assigned: false,
        error: false,
      };
    case AGREGAR_USUARIO_ORIGINAL_EDIT: {
      return {
        ...state,
        original: action.payload,
        assigned: true,
        error: false,
      };
    }
    default:
      return state;
  }
}
