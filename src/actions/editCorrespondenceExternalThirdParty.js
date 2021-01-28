import { AGREGAR_TERCERO_DISPONIBLE_EDIT } from "../types/index";

export const agregarTerceroDisponible = (id) => {
  return { type: AGREGAR_TERCERO_DISPONIBLE_EDIT, payload: id };
};
