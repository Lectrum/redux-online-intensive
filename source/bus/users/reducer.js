
import { types } from './types';
import { fromJS, List } from 'immutable';

const initialState = List();

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_USERS:
            return fromJS(action.payload);
        case types.CLEAR_USERS:
            return state.clear();
        default:
            return state;
    }
};
