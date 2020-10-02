import { AGREGAR_TERCERO_DISPONIBLE_EDIT } from "../types";
const initialState = {
  thirdParty: {},
  error: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_TERCERO_DISPONIBLE_EDIT:
      return {
        ...state,
        thirdParty: action.payload,
        error: false,
      };
    default:
      return state;
  }
}
