import {
  AGREGAR_USUARIO_ORIGINAL,
  BORRAR_USUARIO_DISPONIBLE,
  AGREGAR_USUARIO_DISPONIBLE,
} from "./../types";
const initialState = {
  users: [],
  original: {},
  assigned: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_USUARIO_DISPONIBLE:
      return {
        ...state,
        users: [...state.users, action.payload],
        assigned: null,
      };

    case BORRAR_USUARIO_DISPONIBLE:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        assigned: false,
      };
    case AGREGAR_USUARIO_ORIGINAL: {
      return {
        ...state,
        original: action.payload,
        assigned: true,
      };
    }
    default:
      return state;
  }
}