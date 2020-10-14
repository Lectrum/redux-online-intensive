// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

import { store } from './bus/init/store';
import { history } from './bus/init/middleware/core';

// Instruments
import './theme/init';

// Intro
import App from './navigation/App';

render(
    <Provider store = { store }>
        <Router history = { history }>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);
