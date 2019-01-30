import { fromJS, List } from 'immutable';

import { FILL_POSTS, FILL_NEW_POST } from './types';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_POSTS:
            return fromJS(action.payload);
        case FILL_NEW_POST:
            return state.unshift(fromJS(action.payload));

        default:
            return state;
    }
};
