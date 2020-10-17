
import { fromJS } from 'immutable';
import { usersSelectors } from '../selectors';

const state = {
    users: fromJS(__.profileSet),
};

describe('users selectors', () => {
    test('should select users', () => {
        expect(usersSelectors.selectUsers(state)).toEqual(__.profileSet);
    });
    test('should select user by id', () => {
        expect(usersSelectors.selectUserById(state)(__.userProfile.id)).toEqual(__.userProfile);
    });
});
