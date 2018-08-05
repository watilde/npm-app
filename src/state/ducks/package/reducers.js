// @flow
import { combineReducers } from "redux";
import type { Package, Path, Action } from "./types";

const package = (state: Package, action: Action): Package => {
  switch (action.type) {
    case "LOAD_PACKAGE_PATH":
      return {
        ...state,
        path: action.path
      };
    case "LOAD_PACKAGE":
      return {
        ...state,
        path: action.package
      };
    default:
      return state;
  }
};

const todosReducer = combineReducers({
  package
});

export default todosReducer;
