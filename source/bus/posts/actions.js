import {
    ADD_CREATED_POST,
    CREATE_POST_ASYNC,
    FETCH_POSTS_ASYNC,
    FILL_POSTS
} from './types';
import { api } from '../../REST';

export const fillPosts = (posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};

export const fetchPostsAsync = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_POSTS_ASYNC,
        });

        const response = await api.posts.fetch();
        const result = await response.json();

        dispatch(fillPosts(result.data));
    } catch (error) {
        dispatch(fillPosts([]));
    }
};

export const createPostAsync = (message) => async (dispatch) => {
    try {
        dispatch({
            type:    CREATE_POST_ASYNC,
            payload: message,
        });

        const response = await api.posts.createPost(message);
        const result = await response.json();

        dispatch({
            type:    ADD_CREATED_POST,
            payload: result.data,
        });
    } catch (error) {}
};
