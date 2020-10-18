
import { fromJS } from 'immutable';
import { usersSelectors } from '../selectors';

const state = {
    users: fromJS(__.userProfileSet),
};

describe('users selectors', () => {
    test('should select users', () => {
        expect(usersSelectors.selectUsers(state)).toEqual(fromJS(__.userProfileSet));
    });

    test('should select user by id', () => {
        expect(usersSelectors.selectUserById(state)(__.userProfile.id)).toEqual(fromJS(__.userProfile));
    });
});
