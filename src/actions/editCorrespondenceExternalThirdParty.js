import { AGREGAR_TERCERO_DISPONIBLE } from "../types/index";

export const agregarTerceroDisponible = (id) => {
  return { type: AGREGAR_TERCERO_DISPONIBLE, payload: id };
};