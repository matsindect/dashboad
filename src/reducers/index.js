import { combineReducers } from "redux";
import authReducer from "./authReducer";
import profile from "./userProfile";
import savedProjectsReducer from "./opportunityManagement/savedProjects";
import savedSpecifiersReducer from "./opportunityManagement/savedSpecifiers";

export default combineReducers({
  auth: authReducer,
  savedProjects: savedProjectsReducer,
  savedSpecifiers: savedSpecifiersReducer,
  profile: profile,
});
