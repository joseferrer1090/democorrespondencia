import { VIEW_STEP_1, VIEW_STEP_2, VIEW_STEP_3, VIEW_STEP_4 } from "./../types";

export function changeView1(bool) {
  return (dispatch) => {
    dispatch(VIEW_1(bool));
  };
}
export function changeView2(bool) {
  return (dispatch) => {
    dispatch(VIEW_2(bool));
  };
}
export function changeView3(bool) {
  return (dispatch) => {
    dispatch(VIEW_3(bool));
  };
}
export function changeView4(bool) {
  return (dispatch) => {
    dispatch(VIEW_4(bool));
  };
}

const VIEW_1 = (bool) => ({
  type: VIEW_STEP_1,
  payload: bool,
});

const VIEW_2 = (bool) => ({
  type: VIEW_STEP_2,
  payload: bool,
});

const VIEW_3 = (bool) => ({
  type: VIEW_STEP_3,
  payload: bool,
});

const VIEW_4 = (bool) => ({
  type: VIEW_STEP_4,
  payload: bool,
});
