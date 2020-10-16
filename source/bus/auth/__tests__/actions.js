
import { authActions } from '../actions';
import { types } from '../types';

describe('auth actions', () => {
    test('authenticate', () => {
        expect(authActions.authenticate()).toEqual({
            type: types.AUTHENTICATE,
        });
    });

    test('logout', () => {
        expect(authActions.logout()).toEqual({
            type: types.LOGOUT,
        });
    });

    test('initialize', () => {
        expect(authActions.initialize()).toEqual({
            type: types.INITIALIZE,
        });
    });

    test('initializeAsync', () => {
        expect(authActions.initializeAsync()).toEqual({
            type: types.INITIALIZE_ASYNC,
        });
    });

    test('authenticateAsync', () => {
        expect(authActions.authenticateAsync()).toEqual({
            type: types.AUTHENTICATE_ASYNC,
        });
    });

    test('loginAsync', () => {
        expect(authActions.loginAsync()).toEqual({
            type: types.LOGIN_ASYNC,
        });
    });

    test('logoutAsync', () => {
        expect(authActions.logoutAsync()).toEqual({
            type: types.LOGOUT_ASYNC,
        });
    });

    test('signupAsync', () => {
        expect(authActions.signupAsync(__.userProfile)).toEqual({
            type:    types.SIGNUP_ASYNC,
            payload: __.userProfile,
        });
    });
});
