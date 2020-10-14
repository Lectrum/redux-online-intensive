import { takeEvery, call, all } from 'redux-saga/effects';
import { types } from '../types';
import { worker } from './workers';

export function* watchWorker () {
    yield takeEvery(types.TYPE, worker);
}

export function* watchDomain () {
    yield all([call(watchWorker)]);
}
