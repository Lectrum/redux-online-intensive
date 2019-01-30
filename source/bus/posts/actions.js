import { FETCH_POST_ASYNC, FILL_POSTS, CREATE_POST_ASYNC, FILL_NEW_POST } from './types';
import { api } from '../../REST';

export const fillPosts = (posts) => {
    return {
        type: FILL_POSTS,
        payload: posts,
    };
};

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_POST_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result.data));
};

export const fillNewPost = (post) => {
    return {
        type: FILL_NEW_POST,
        payload: post,
    };
};

export const createPostAsync = (comment) => async (dispatch) => {
    dispatch({
        type: CREATE_POST_ASYNC,
    });

    const response = await api.posts.createPost(comment);
    const result = await response.json();

    dispatch(fillNewPost(result.data));
};
