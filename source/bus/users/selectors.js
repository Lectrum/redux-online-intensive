const store = 'users';

export const selectUsers = (state) => state[store];

export const selectUserById = (state) => (userId) => state[store].find((x) => x.get('id') === userId);
