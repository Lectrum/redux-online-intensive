import { applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import { customThunk } from './custom';
import createSageMiddleware from 'redux-saga';

import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});

const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSageMiddleware();

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middleware = [sagaMiddleware, customThunk, routerMiddleware];

if (__DEV__) {
    middleware.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhancedStore, sagaMiddleware, history };
