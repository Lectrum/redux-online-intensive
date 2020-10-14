import { types } from './types';

export const uiActions = {
    startFetching: () => ({
        type: types.START_FETCHING,
    }),
    stopFetching: () => ({
        type: types.STOP_FETCHING,
    }),
    emitError: (error, message = '') => ({
        type:    types.EMIT_ERROR,
        payload: { error, message },
    }),
};
