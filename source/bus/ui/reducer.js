
import { types } from './types';
import { Map } from 'immutable';

const initialState = Map({
    isFetching: false,
    isOnline:   false,
    error:      '',
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_FETCHING:
            return state.set('isFetching', true);
        case types.STOP_FETCHING:
            return state.set("isFetching", false);
        case types.SET_ONLINE_STATE:
            return state.set("isOnline", true);
        case types.SET_OFFLINE_STATE:
            return state.set("isOnline", false);
        case types.EMIT_ERROR:
            return state.set("error", action.payload);
        default:
            return state;
    }
};
