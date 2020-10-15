import { apply, put, select } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { selectProfileBase } from '../../../profile/selectors';
import { uiActions } from '../../../ui/actions';
import { postsActions } from '../../actions';

export function* unlikePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.unlike, [postId]);

        if (response.status !== 204) {
            throw new Error(response.message);
        }

        const liker = yield select(selectProfileBase);

        yield put(postsActions.unlikePost({ liker, postId }));
    } catch (error) {
        yield put(uiActions.emitError(error));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
