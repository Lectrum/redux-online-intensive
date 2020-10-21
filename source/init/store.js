// Core
import { createStore } from 'redux';

// Reducer
import { rootReducer } from './rootReducer';

// Enhancer
import { enchancedStore } from "./middleware/core";

export const store = createStore(rootReducer, enchancedStore);
