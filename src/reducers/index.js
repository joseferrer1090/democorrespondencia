import { combineReducers } from "redux";
import step1ReducerReceiver from "./step1ReducerReceiver";
import step1ReducerThirdParty from "./step1ReducerThirdParty";
import step1ReducerInfoTypeDocumentary from "./step1ReducerActionsInfoTypeDocumentary";
import step1ReducerDataTemplate from "./step1ReducerSelectTemplate";
import step1ReducerPreviewTemplate from "./step1ReducerPreviewTemplate";
import stickerReducer from "./stickerReducer";
import step2ReducerSticker from "./step2ReducerSticker";
import { authReducer } from "./authReducer";
import step3ReducerFiling from "./step3ReducerFiling";
import controlFilingViews from "./controlFilingViewsReducer";
import { dataCorrespondenceExternal } from "./dataCorrespondenceExternal";
import chartsDashboard from "./chartsDashboardReducer";
import { dataAnottationsReducers } from "./anottationsReducer";
import { sidebarStatus } from "./sidebarReducer";
import editCorrespondeceExternalThirdParty from "./reducerEditCorrespondenceExternalThirdParty";
import editCorrespondeceExternalReceiver from "./reducerEditCorrespondenceExternalReceiver";
import editCorrespondeceExternalPreviewTemplate from "./reducerEditCorrespondenceExternalPreviewTemplate";
import editCorrespondeceExternalSelectTemplate from "./reducerEditCorrespondenceExternalSelectTemplate";
import editCorrespondenceExternalTypeDocumentary from "./reducerEditCorrespondenceExternalTypeDocumentary";
import editCorrespondenceExternal from "./reducerEditCorrespondenceExternal";

export default combineReducers({
  step2ReducerSticker,
  step1ReducerReceiver,
  step1ReducerThirdParty,
  step1ReducerInfoTypeDocumentary,
  step1ReducerDataTemplate,
  step1ReducerPreviewTemplate,
  stickerReducer,
  authReducer,
  step3ReducerFiling,
  controlFilingViews,
  dataCorrespondenceExternal,
  chartsDashboard,
  dataAnottationsReducers,
  sidebarStatus,
  editCorrespondeceExternalThirdParty,
  editCorrespondeceExternalReceiver,
  editCorrespondeceExternalPreviewTemplate,
  editCorrespondeceExternalSelectTemplate,
  editCorrespondenceExternalTypeDocumentary,
  editCorrespondenceExternal,
});
