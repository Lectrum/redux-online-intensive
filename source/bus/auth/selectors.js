export const store = 'auth';

export const selectIsAuthenticated = (state) => state[store].get('isAuthenticated');
