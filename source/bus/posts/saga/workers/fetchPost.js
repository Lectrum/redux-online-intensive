// Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "../../../../REST";
import { postActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* fetchPost () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.fetch);
        const { data: posts, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postActions.fillPosts(posts));
    } catch (error) {
        yield put(uiActions.emitError(error, 'fetchPost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
