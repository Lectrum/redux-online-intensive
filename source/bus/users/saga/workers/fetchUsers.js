
import { apply, put } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { usersActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fetchUsers () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.users.fetch);
        const { data: users, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(response.message);
        }

        yield put(usersActions.fillUsers(users));

    } catch (error) {
        yield put(uiActions.emitError(error, ''));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
