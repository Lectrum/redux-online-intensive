import { takeEvery, call, all } from 'redux-saga/effects';
import { types } from '../types';
import { createPost, fetchPosts, removePost } from './workers';

export function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

export function* watchFetchPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
}

export function* watchRemovePost () {
    yield takeEvery(types.REMOVE_POST_ASYNC, removePost);
}

export function* watchPosts () {
    yield all([call(watchCreatePost), call(watchFetchPosts), call(watchRemovePost)]);
}
