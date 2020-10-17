
import { apply, put } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';

export function* worker () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.authenticate);
        const { data, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(response.message);
        }

    } catch (error) {
        yield put(uiActions.emitError(error, ''));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
