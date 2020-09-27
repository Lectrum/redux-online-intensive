// Core
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./bus/init/store";

// Instruments
import "./theme/init";

// Intro
import Gallery from "./basic-redux";

render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById("app")
);
