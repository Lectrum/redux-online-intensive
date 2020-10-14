import { types } from './types';

export const postsActions = {
    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },

    clearPosts: () => {
        return {
            type: types.CLEAR_POSTS,
        };
    },

    createPost: (post) => {
        return {
            type:    types.CREATE_POST,
            payload: post,
        };
    },
    removePost: (postId) => {
        return {
            type:    types.REMOVE_POST,
            payload: postId,
        };
    },
    removePostAsync: (postId) => {
        return {
            type:    types.REMOVE_POST_ASYNC,
            payload: postId,
        };
    },
    fetchPostsAsync: () => ({
        type: types.FETCH_POSTS_ASYNC,
    }),

    createPostAsync: (message) => ({
        type:    types.CREATE_POST_ASYNC,
        payload: message,
    }),
};
