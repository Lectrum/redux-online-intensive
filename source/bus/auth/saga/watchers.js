import { takeEvery, call, all } from 'redux-saga/effects';
import { types } from '../types';
import { signup, login, authenticate, initialize, logout } from './workers';

export function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}

export function* watchLogin () {
    yield takeEvery(types.LOGIN_ASYNC, login);
}

export function* watchAuthenticate () {
    yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}

export function* watchInitialize () {
    yield takeEvery(types.INITIALIZE_ASYNC, initialize);
}

export function* watchLogout () {
    yield takeEvery(types.LOGOUT_ASYNC, logout);
}

export function* watchAuth () {
    yield all([call(watchSignup), call(watchLogin), call(watchAuthenticate), call(watchInitialize), call(watchLogout)]);
}
