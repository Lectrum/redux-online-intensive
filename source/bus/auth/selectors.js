export const store = 'auth';

export const selectIsAuthenticated = (state) => state[store].get('isAuthenticated');
export const selectIsInitialized = (state) => state[store].get('isInitialized');
