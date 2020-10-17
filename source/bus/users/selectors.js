const store = 'users';

export const usersSelectors = {
    selectUsers:    (state) => state[store],
    selectUserById: (state) => (userId) => state[store].find((x) => x.get('id') === userId),
};
