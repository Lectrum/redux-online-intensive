import { apply, put } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { postsActions } from '../../actions';

export function* fetchPosts() {
    try {
        const response = yield apply(api, api.posts.fetch);
        const { data: posts, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.fillPosts(posts));
    } catch (error) {
        console.log(error);
    }
}
