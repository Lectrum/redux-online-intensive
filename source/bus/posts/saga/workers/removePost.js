import { apply, put } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { postsActions } from '../../actions';

export function* removePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.remove, [postId]);

        if (response.status !== 204) {
            throw new Error(response.message);
        }

        yield put(postsActions.removePost(postId));
    } catch (error) {
        yield put(uiActions.emitError(error));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
