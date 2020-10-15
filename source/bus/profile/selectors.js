const store = 'profile';

export const selectProfile = (state) => state[store];

export const selectProfileBase = (state) => state[store].removeAll(['avatar', 'token']);
