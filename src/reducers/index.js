import { combineReducers } from "redux";
import step1ReducerReceiver from "./step1ReducerReceiver";
import step1ReducerThirdParty from "./step1ReducerThirdParty";
import step1ReducerActionsInfoTypeDocumentary from "./step1ReducerActionsInfoTypeDocumentary";
import stickerReducer from "./stickerReducer";

export default combineReducers({
  step1ReducerReceiver,
  step1ReducerThirdParty,
  step1ReducerActionsInfoTypeDocumentary,
  stickerReducer,
});
