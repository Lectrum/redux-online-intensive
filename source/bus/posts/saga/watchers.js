import { takeEvery, call, all } from 'redux-saga/effects';
import { types } from '../types';
import { createPost } from './workers';

export function* watchCreatePost() {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

export function* watchPosts() {
    yield all([call(watchCreatePost)]);
}
