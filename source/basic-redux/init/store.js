// Core
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from "redux-logger";

// Reducer
import { rootReducer } from './rootReducer';

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

// Подключение localStorage браузера при первой загрузке программы.
const preloadState = JSON.parse(localStorage.getItem('gallery'));

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancers = devtools ? devtools : compose;
const enchancedStore = composeEnchancers(applyMiddleware(logger));

export const store = preloadState
    ? createStore(rootReducer, preloadState, enchancedStore)
    : createStore(rootReducer, enchancedStore);

store.subscribe(() => { // Этот коллбек будет вызываться при каждом вызове store.dispatch во всей программе.
    const state = store.getState();

    localStorage.setItem('gallery', JSON.stringify(state));
});
