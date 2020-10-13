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

    fetchPostsAsync: () => ({
        type: types.FETCH_POSTS_ASYNC
    }),

    createPostAsync: message => ({
        type: types.CREATE_POST_ASYNC,
        payload: message
    })
};
