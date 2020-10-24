// Core
import { applyMiddleware, compose } from 'redux';

// Middleware
import { createLogger } from "redux-logger";
import { customThunk } from "../middleware/custom";

import createSagaMiddleware from "redux-saga";

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#FF0005',
    },
});

const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancers = __DEV__ && devtools ? devtools : compose;

const middleware = [sagaMiddleware, customThunk];

if (__DEV__) {
    middleware.push(logger);
}

const enchancedStore = composeEnchancers(applyMiddleware(...middleware));

export { enchancedStore, sagaMiddleware };
// Экспорт sagaMiddleware - обязательный шаг для полной настройки Redux Saga.
