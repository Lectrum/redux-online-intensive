// Core
import { all, call } from "redux-saga/effects";

// Watchers

import { watchAuth } from "../bus/auth/saga/watchers";
import { watchPosts } from "../bus/posts/saga/watchers";

export function* rootSaga () {
    yield all([call(watchPosts), call(watchAuth)]);
    //yield watchPosts(); // Теоретически, можно было бы обойтись без эффектов all, call. Но с ними Root Saga становится расширяемой и более правильной с точки зрения использования эффектов.
}

// Теоретически, можно было бы обойтись без эффекта all в redux-online-intensive\source\bus\posts\saga\watchers.js:
// import { watcherCreatePost } from "../bus/posts/saga/watchers";
// export function* rootSaga () {
//     yield watcherCreatePost();
// }
// Но тогда импортов будет существенно больше, а также тело генератора rootSaga будет длиннее.
