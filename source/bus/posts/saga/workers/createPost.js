import { apply, put } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { postsActions } from '../../actions';

export function* createPost({ payload: comment }) {
    try {
        const response = yield apply(api, api.posts.create, [comment]);
        const { data: post, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.createPost(post));
    } catch (error) {
        console.log(error);
    }
}
