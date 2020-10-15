const store = 'ui';

export const selectIsFetching = (state) => state[store].get('isFetching');
