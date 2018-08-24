import { combineReducers } from "redux";

const packageReducer = (state, action) => {
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


export default packageReducer;
