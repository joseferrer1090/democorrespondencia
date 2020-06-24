import { AGREGAR_TERCERO_DISPONIBLE } from "../types/index";

export const agregarTerceroDisponible = (user) => {
  return { type: AGREGAR_TERCERO_DISPONIBLE, payload: user };
};
