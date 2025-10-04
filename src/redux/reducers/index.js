import { combineReducers } from "redux";
import { languageReducer } from "./languageReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
});
