// Core
import { takeEvery, all, call } from "redux-saga/effects";
// takeEvery - "на каждый запуск экшна вызывай такую-то worker-saga".
// all - эффект, принимающий массив, где каждый элемент - это вызов другой watcher-saga.
// call - предназначен для вызова функций, похож на метод call обычного JS. С эффектами проще поддерживать код в Redux Saga и особенно проще тестировать.
// apply - аналогичен call, т.е. вызывает указанную функцию, но лучше подходит для вызова асинхронных функций. apply помогает Redux Saga сохранить контекст вызова функции при обработке асинхронной операции. Первым аргументом передается контекст вызова. Второй аргумент - метод, который необходимо вызвать. Третий аргумент - массив параметров вызываемого метода. Например: const result = yield apply(response, response.json); Здесь Redux Saga будет знать, что метод .json нужно вызывать именно в контексте объекта response.
// put - работает точно так же, как store.dispatch(); то есть put предназначен для запуска экшна из worker saga.
// При использовании любого эффекта redux-saga нужно обязательно использовать ключевое слово yield.

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
