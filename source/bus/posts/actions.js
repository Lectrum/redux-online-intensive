// Types
import {
    FILL_POSTS,
    ADD_POST,
    FETCH_POSTS_ASYNC,
    CREATE_POST_ASYNC
} from "./types";

// Instruments
import { api } from "../../REST";

export const fillPosts = (posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};

export const addPost = (post) => {
    return {
        type:    ADD_POST,
        payload: post,
    };
};

// Экшн.
// export const fetchPostsAsync = () => {
//     return {
//         type: FETCH_POSTS_ASYNC,
//     };
// };

// Асинхронный экшн.
// Обладает большой гибкостью: в нем можно диспатчить экшны сколько угодно раз, а также можно вызывать getState и получать доступ к состоянию в любой момент.
// Именно функция async (dispatch, getState) => { ... }, вызываемая в componentDidMount компонента Posts, будет проходить цепочку middleware в redux.
export const fetchPostsAsync = () => async (dispatch, getState) => {
    dispatch({
        type: FETCH_POSTS_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();
    const posts = result.data;

    dispatch(fillPosts(posts));
};

export const createPostAsync = (comment) => async (dispatch, getState) => {
    dispatch({
        type:    CREATE_POST_ASYNC,
        payload: comment,
    });

    const response = await api.posts.create(comment);

    if (response.ok) {
        const result = await response.json();
        const post = result.data;

        dispatch(addPost(post));
    }
};
