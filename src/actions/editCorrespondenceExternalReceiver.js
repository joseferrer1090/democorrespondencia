import {
  AGREGAR_USUARIO_DISPONIBLE_EDIT,
  BORRAR_USUARIO_DISPONIBLE_EDIT,
  AGREGAR_USUARIO_ORIGINAL_EDIT,
} from "../types/index";

export const agregarUsuarioDisponible = (user) => {
  return { type: AGREGAR_USUARIO_DISPONIBLE_EDIT, payload: user };
};

export const borrarUsuarioDiponible = (id) => {
  return {
    type: BORRAR_USUARIO_DISPONIBLE_EDIT,
    payload: id,
  };
};

export const agregarUsuarioOriginal = (id) => {
  return {
    type: AGREGAR_USUARIO_ORIGINAL_EDIT,
    payload: id,
  };
};
