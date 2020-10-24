// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
// Provider использует контекст React, чтобы сделать store доступным для любого компонента.
import { BrowserRouter as Router } from "react-router-dom";

// Instruments
import { store } from "./init/store";
import './theme/init';

// Intro
import App from './navigation/App';

render(
    <Provider store = { store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);
