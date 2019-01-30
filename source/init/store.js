import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

const logger = createLogger({
    duration: true,
    collapse: true,
    colors: {
        title: () => '#139BFE',
        prevState: () => '#1C5FAF',
        action: () => '#149945',
        nextState: () => '#a4319f',
        error: () => '#ff0005',
    }
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools? devtools : compose;

const middleware = [thunk];

if(__DEV__){
    middleware.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancedStore);
