import { combineReducers } from "redux";
import step1ReducerReceiver from "./step1ReducerReceiver";
import step1ReducerThirdParty from "./step1ReducerThirdParty";

export default combineReducers({
  step1ReducerReceiver,
  step1ReducerThirdParty,
});
