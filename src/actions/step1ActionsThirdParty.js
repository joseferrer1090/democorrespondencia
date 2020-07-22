import { AGREGAR_TERCERO_DISPONIBLE, RESET_FORM_STEP_1 } from "../types/index";

export const agregarTerceroDisponible = (id) => {
  return { type: AGREGAR_TERCERO_DISPONIBLE, payload: id };
};
export const resetFormStep1ThirdParty = () => ({
  type: RESET_FORM_STEP_1,
});
