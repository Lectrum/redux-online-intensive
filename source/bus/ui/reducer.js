
import { types } from './types';
import { Map } from 'immutable';

const initialState = Map({
    isFetching: false,
    error:      '',
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_FETCHING:
            return state.set('isFetching', true);
        case types.STOP_FETCHING:
            return state.set("isFetching", false);
        case types.EMIT_ERROR:
            return state.set("error", action.payload);
        default:
            return state;
    }
};
