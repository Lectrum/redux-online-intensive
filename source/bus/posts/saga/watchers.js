// Core
import { takeEvery, all, call } from "redux-saga/effects";

// Types
import { types } from "../types";

// Workers
import { fetchPost, createPost } from "./workers";

export function* watcherFetchPost () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPost);
}

export function* watcherCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

// Промежуточная watcher-saga, собирающая в себя остальные watcher-saga'и этого домена.
export function* watchPosts () {
    yield all([
        call(watcherFetchPost),
        call(watcherCreatePost)
    ]);
}
// То же самое без call:
// export function* watchPosts () {
//     yield all([watcherFetchPost(), watcherCreatePost()]);
// }
