import {
  AGREGAR_USUARIO_DISPONIBLE,
  BORRAR_USUARIO_DISPONIBLE,
  AGREGAR_USUARIO_ORIGINAL,
} from "../types/index";

export const agregarUsuarioDisponible = (user) => {
  return { type: AGREGAR_USUARIO_DISPONIBLE, payload: user };
};

export const borrarUsuarioDiponible = (id) => {
  return {
    type: BORRAR_USUARIO_DISPONIBLE,
    payload: id,
  };
};

export const agregarUsuarioOriginal = (id) => {
  return {
    type: AGREGAR_USUARIO_ORIGINAL,
    payload: id,
  };
};
