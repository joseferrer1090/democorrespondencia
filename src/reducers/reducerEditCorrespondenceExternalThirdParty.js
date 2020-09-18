import { AGREGAR_TERCERO_DISPONIBLE } from "../types";
const initialState = {
  thirdParty: {},
  error: false
};
export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_TERCERO_DISPONIBLE:
      return {
        ...state,
        thirdParty: action.payload,
        error:false
      };
    default:
      return state;
  }
}