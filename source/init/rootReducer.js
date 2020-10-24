// Core
import { combineReducers } from 'redux';

// Reducers
import { authReducer as auth } from '../bus/auth/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';
import { postsReducer as posts } from '../bus/posts/reducer';
import { profileReducer as profile } from '../bus/profile/reducer';

export const rootReducer = combineReducers({
    auth,
    ui,
    posts,
    profile,
});
