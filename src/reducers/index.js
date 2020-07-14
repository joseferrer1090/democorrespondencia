import { combineReducers } from "redux";
import step1ReducerReceiver from "./step1ReducerReceiver";
import step1ReducerThirdParty from "./step1ReducerThirdParty";
import step1ReducerInfoTypeDocumentary from "./step1ReducerActionsInfoTypeDocumentary";
import step1ReducerDataTemplate from "./step1ReducerSelectTemplate";
import step1ReducerPreviewTemplate from "./step1ReducerPreviewTemplate";
import stickerReducer from "./stickerReducer";

export default combineReducers({
  step1ReducerReceiver,
  step1ReducerThirdParty,
  step1ReducerInfoTypeDocumentary,
  step1ReducerDataTemplate,
  step1ReducerPreviewTemplate,
  stickerReducer,
});
