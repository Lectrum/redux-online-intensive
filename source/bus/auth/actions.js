import { types } from './types';

export const authActions = {

    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
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
};
