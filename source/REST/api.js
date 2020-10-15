import { groupId, MAIN_URL } from './config';

export const api = {
    get token () {
        return localStorage.getItem('token');
    },
    auth: {
        signup (userInfo) {
            return fetch(`${MAIN_URL}/user/${groupId}`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            });
        },
        login (userInfo) {
            return fetch(`${MAIN_URL}/user/login`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            });
        },
        authenticate () {
            return fetch(`${MAIN_URL}/user/login`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: this.token }),
            });
        },
        logout () {
            return fetch(`${MAIN_URL}/user/logout`, {
                method:  'GET',
                headers: {
                    Authorization: this.token,
                },
            });
        },
    },
    posts: {
        fetch () {
            return fetch(`${MAIN_URL}/feed`, {
                method:  'GET',
                headers: {
                    Authorization: this.token,
                },
            });
        },
        create (comment) {
            return fetch(`${MAIN_URL}/feed`, {
                method:  'POST',
                headers: {
                    Authorization:  this.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment }),
            });
        },
        remove (postId) {
            return fetch(`${MAIN_URL}/feed/${postId}`, {
                method:  'DELETE',
                headers: {
                    Authorization:  this.token,
                    'Content-Type': 'application/json',
                },
            });
        },
        like (postId) {
            return fetch(`${MAIN_URL}/feed/like/${postId}`, {
                method:  'PUT',
                headers: {
                    Authorization:  this.token,
                    'Content-Type': 'application/json',
                },
            });
        },
        unlike (postId) {
            return fetch(`${MAIN_URL}/feed/unlike/${postId}`, {
                method:  'PUT',
                headers: {
                    Authorization:  this.token,
                    'Content-Type': 'application/json',
                },
            });
        },
    },
    users: {
        fetch () {
            return fetch(`${MAIN_URL}/user/all`, {
                method:  'GET',
                headers: {
                    Authorization: this.token,
                },
            });
        },
    },
};
