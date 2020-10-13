import { combineReducers } from "redux";

import { postsReducer as posts } from "../posts/reducer";

export const rootReducer = combineReducers({ posts });
