/*
    Global State

    sidebarReducer: {
        status: => Este state me indica que opcion selecciono el usuer
    }

*/

import {
  ACTIVE_CORRESPONDENCE_RECEIVED,
  ACTIVE_CORRESPONDENCE_PENDING,
  ACTIVE_ANOTTATIONS,
} from "./../types/index";

const initalState = {
  status: null,
};

export const sidebarStatus = (state = initalState, action) => {
  switch (action.type) {
    case ACTIVE_CORRESPONDENCE_RECEIVED:
      return {
        ...state,
        status: action.payload,
      };
    case ACTIVE_CORRESPONDENCE_PENDING:
      return {
        ...state,
        status: action.payload,
      };
    case ACTIVE_ANOTTATIONS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
