// Core
import { fromJS, List } from "immutable";
// fromJS - метод конвертации обычного JS в коллекцию immutable JS.

// Types
import { FILL_POSTS, ADD_POST } from "./types";

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_POSTS:
            return fromJS(action.payload);

        case ADD_POST:
            //console.log('-> state.posts, action.payload', state, action.payload);
            return state.unshift(fromJS(action.payload));

        default: return state;
    }
};
