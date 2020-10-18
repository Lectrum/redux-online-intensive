import { types } from './types';

export const uiActions = {
    startFetching: () => ({
        type: types.START_FETCHING,
    }),
    stopFetching: () => ({
        type: types.STOP_FETCHING,
    }),
    setOnlineState: () => ({
        type: types.SET_ONLINE_STATE,
    }),
    setOfflineState: () => ({
        type: types.SET_OFFLINE_STATE,
    }),
    emitError: (error, message = '') => ({
        type:    types.EMIT_ERROR,
        payload: { error, message },
    }),
};
