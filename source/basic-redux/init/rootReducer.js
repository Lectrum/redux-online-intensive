import { combineReducers } from 'redux';

import { galleryReducer } from '../bus/gallary/reducer';

export const rootReducer = combineReducers({
    gallery: galleryReducer,
});
