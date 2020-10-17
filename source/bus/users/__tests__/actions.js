import { usersActions } from '../actions';
import { types } from '../types';

describe('users actions', () => {
    test('should handle fill users actions', () => {
        expect(usersActions.fillUsers(__.profileSet)).toEqual({ type: types.FILL_USERS, payload: __.profileSet });
    });

    test('should handle clear users actions', () => {
        expect(usersActions.clearUsers()).toEqual({ type: types.CLEAR_USERS });
    });

    test('should handle clear fetch users async', () => {
        expect(usersActions.fetchUsersAsync()).toEqual({ type: types.FETCH_USERS_ASYNC });
    });

});
