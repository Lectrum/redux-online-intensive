import { combineReducers } from 'redux';

import { postsReducer as posts } from '../posts/reducer';
import { uiReducer as ui } from '../ui/reducer';
import { authReducer as auth } from '../auth/reducer';

export const rootReducer = combineReducers({ posts, auth, ui });
