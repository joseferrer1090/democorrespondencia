import { VIEW_STEP_1, VIEW_STEP_2, VIEW_STEP_3, VIEW_STEP_4 } from "./../types";

const initialState = {
  step1: false,
  step2: false,
  step3: false,
  step4: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case VIEW_STEP_1:
      return {
        ...state,
        step1: action.payload,
      };
    case VIEW_STEP_2:
      return {
        ...state,
        step2: action.payload,
      };
    case VIEW_STEP_3:
      return {
        ...state,
        step3: action.payload,
      };
    case VIEW_STEP_4:
      return {
        ...state,
        step4: action.payload,
      };
    default:
      return state;
  }
}
