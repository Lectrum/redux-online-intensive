import { combineReducers } from "redux";

import { reducer as gallery } from "../gallery";

export const rootReducer = combineReducers({ gallery });
