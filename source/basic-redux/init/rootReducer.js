// Core
import { combineReducers } from 'redux';

// Reducer
import { galleryReducer } from '../bus/gallery/reducer';

export const rootReducer = combineReducers({
    gallery: galleryReducer,
});
