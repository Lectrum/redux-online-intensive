// Core
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// Instruments
import './theme/init';
import { store } from './init/store';

// Intro
import App from './navigation/App';

render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app'));
