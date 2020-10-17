const store = 'profile';

export const profileSelectors = {
    selectProfile:     (state) => state[store],
    selectProfileBase: (state) => state[store].removeAll(['avatar', 'token']),
};
