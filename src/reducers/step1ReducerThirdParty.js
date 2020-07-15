import { AGREGAR_TERCERO_DISPONIBLE, RESET_FORM_STEP_1 } from "../types";
const initialState = {
  thirdParty: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_TERCERO_DISPONIBLE:
      return {
        ...state,
        thirdParty: action.payload,
      };
    case RESET_FORM_STEP_1:
      return {
        ...state,
        thirdParty: {},
      };
    default:
      return state;
  }
}
