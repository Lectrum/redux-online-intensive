// Core
import { applyMiddleware, compose } from 'redux';

// Middleware
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
// Включает асинхронный режим работы в redux.
// Предназначение этого middleware - запускать экшны-функции вместо экшнов-объектов.
import { customThunk } from "../middleware/custom";

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

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancers = __DEV__ && devtools ? devtools : compose;

const middleware = [
    //thunk,
    customThunk
]; // Массив используется, т.к. на практике middleware бывает много.

if (__DEV__) {
    middleware.push(logger);
}

const enchancedStore = composeEnchancers(applyMiddleware(...middleware));

export { enchancedStore };
