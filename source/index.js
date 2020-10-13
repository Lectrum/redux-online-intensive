// Core
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./bus/init/store";

// Instruments
import "./theme/init";

// Intro
import App from "./navigation/App";

render(
    <Provider store = { store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("app")
);
