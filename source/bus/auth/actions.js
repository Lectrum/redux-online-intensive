import { types } from './types';

export const authActions = {

    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },
    logout: () => {
        return {
            type: types.LOGOUT,
        };
    },
    initialize: () => {
        return {
            type: types.INITIALIZE,
        };
    },
    initializeAsync: () => {
        return {
            type: types.INITIALIZE_ASYNC,
        };
    },
    authenticateAsync: () => {
        return {
            type: types.AUTHENTICATE_ASYNC,
        };
    },
    loginAsync: (userData) => {
        return {
            type:    types.LOGIN_ASYNC,
            payload: userData,
        };
    },
    signupAsync: (userData) => {
        return {
            type:    types.SIGNUP_ASYNC,
            payload: userData,
        };
    },
    logoutAsync: () => {
        return {
            type: types.LOGOUT_ASYNC,
        };
    },
};
