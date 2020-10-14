import { takeEvery, call, all } from 'redux-saga/effects';
import { types } from '../types';
import { signup } from './workers';

export function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}

export function* watchAuth () {
    yield all([call(watchSignup)]);
}
