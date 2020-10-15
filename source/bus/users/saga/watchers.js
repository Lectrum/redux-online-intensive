
import { takeEvery, call, all } from 'redux-saga/effects';
import { types } from '../types';
import { fetchUsers } from './workers';

function* watchFetchUsers () {
    yield takeEvery(types.FETCH_USERS_ASYNC, fetchUsers);
}

export function* watchUsers () {
    yield all([call(watchFetchUsers)]);
}
