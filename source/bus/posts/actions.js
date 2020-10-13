import { types } from './types';
import { api } from '../../REST';

export const postsActions = {
    fillPosts: posts => {
        return {
            type: types.FILL_POSTS,
            payload: posts
        };
    },
    createPost: post => {
        return {
            type: types.CREATE_POST,
            payload: post
        };
    },

    fetchPostsAsync: () => async dispatch => {
        try {
            dispatch({
                type: types.FETCH_POSTS_ASYNC
            });

            const response = await api.posts.fetch();
            const result = await response.json();

            dispatch(postsActions.fillPosts(result.data));
        } catch (error) {
            dispatch(postsActions.fillPosts([]));
        }
    },

    createPostAsync: message => ({
        type: types.CREATE_POST_ASYNC,
        payload: message
    })
};
