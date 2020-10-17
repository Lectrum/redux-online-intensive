import { profileActions } from '../actions';

describe('profile actions', () => {
    test('should fillProfile', () => {
        expect(profileActions.fillProfile(__.userProfile)).toMatchSnapshot();
    });

    test('should updateAvatar', () => {
        expect(profileActions.updateAvatar(__.url)).toMatchSnapshot();
    });

    test('should clearProfile', () => {
        expect(profileActions.clearProfile()).toMatchSnapshot();
    });

    test('updateNameAsync', () => {
        expect(profileActions.updateNameAsync(__.newName)).toMatchSnapshot();
    });

    test('updateAvatarAsync', () => {
        expect(profileActions.updateAvatarAsync(__.newAvatar)).toMatchSnapshot();
    });

    test('updatePasswordAsync', () => {
        expect(profileActions.updatePasswordAsync(__.newPassword)).toMatchSnapshot();
    });
});
