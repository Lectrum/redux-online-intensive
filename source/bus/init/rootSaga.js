import { all, call } from 'redux-saga/effects';
import { watchPosts } from '../posts/saga/watchers';
import { watchAuth } from '../auth/saga/watchers';

export function* rootSaga () {
    yield all([call(watchPosts), call(watchAuth)]);
}
