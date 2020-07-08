import { combineReducers } from "redux";
import step1ReducerReceiver from "./step1ReducerReceiver";
import step1ReducerThirdParty from "./step1ReducerThirdParty";
import step1ReducerActionsInfoTypeDocumentary from "./step1ReducerActionsInfoTypeDocumentary";

export default combineReducers({
  step1ReducerReceiver,
  step1ReducerThirdParty,
  step1ReducerActionsInfoTypeDocumentary,
});
