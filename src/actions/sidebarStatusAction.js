import {
  ACTIVE_ANOTTATIONS,
  ACTIVE_CORRESPONDENCE_PENDING,
  ACTIVE_CORRESPONDENCE_RECEIVED,
} from "./../types";

export const setActiveCorrespondenceReceived = () => ({
  type: ACTIVE_CORRESPONDENCE_RECEIVED,
  payload: "RECEIVED",
});

export const setActiveCorrespondencePending = () => ({
  type: ACTIVE_CORRESPONDENCE_PENDING,
  payload: "PENDING",
});

export const setActiveAnottations = () => ({
  type: ACTIVE_ANOTTATIONS,
  payload: "ANOTTATIONS",
});
