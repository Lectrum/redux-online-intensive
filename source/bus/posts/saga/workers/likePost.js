import { apply, put, select } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { selectProfileBase } from '../../../profile/selectors';
import { uiActions } from '../../../ui/actions';
import { postsActions } from '../../actions';

export function* likePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.like, [postId]);

        if (response.status !== 204) {
            throw new Error(response.message);
        }

        const liker = yield select(selectProfileBase);

        yield put(postsActions.likePost({ liker, postId }));
    } catch (error) {
        yield put(uiActions.emitError(error));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
