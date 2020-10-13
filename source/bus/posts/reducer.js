import { fromJS, List } from "immutable";

import { FILL_POSTS } from "./types";

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_POSTS:
            return fromJS(action.payload);
        default:
            return state;
    }
};
