// @flow
import React from "react";
import { render } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import configureStore from "./state/store";
import packageTypes from "./state/ducks/package";
import App from "./views/App";


const reduxStore: packageTypes.Store = configureStore(window.REDUX_INITIAL_DATA);

render(
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
