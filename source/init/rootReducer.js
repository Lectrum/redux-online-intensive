// Core
import { combineReducers } from 'redux';

// Reducer
import { postsReducer as posts } from '../bus/posts/reducer';

export const rootReducer = combineReducers({
    posts,
});
