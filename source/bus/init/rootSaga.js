import { all, call } from 'redux-saga/effects';
import { watchPosts } from '../posts/saga/watchers';

export function* rootSaga () {
    yield all([call(watchPosts)]);
}
