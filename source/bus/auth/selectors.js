export const store = 'auth';

export const authSelectors = {
    selectIsAuthenticated: (state) => state[store].get('isAuthenticated'),
    selectIsInitialized:   (state) => state[store].get('isInitialized'),
};
