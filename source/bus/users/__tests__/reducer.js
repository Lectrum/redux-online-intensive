
import { List, fromJS } from 'immutable';
import { usersReducer } from '../reducer';
import { usersActions } from '../actions';

const initialState = List();

describe('users reducer', () => {
    test('should return initial state by default', () => {
        expect(usersReducer(void 0, {})).toEqual(initialState);
    });

    test('should return filled array with users on fill users action', () => {
        expect(usersReducer(initialState, usersActions.fillUsers(__.userProfileSet))).toEqual(fromJS(__.userProfileSet));
    });

    test('should return empty array on clear users', () => {
        expect(usersReducer(fromJS(__.userProfileSet), usersActions.clearUsers())).toEqual(initialState.clear());
    });
});
