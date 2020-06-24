import { AGREGAR_TERCERO_DISPONIBLE } from "../types";
const initialState = {
  thirdParty: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_TERCERO_DISPONIBLE:
      return {
        ...state,
        thirdParty: [...state.thirdParty, action.payload],
      };
    default:
      return state;
  }
}
