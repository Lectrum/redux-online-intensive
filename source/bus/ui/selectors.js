const store = 'ui';

export const selectIsFetching = (state) => state[store].get('isFetching');
export const selectIsOnline = (state) => state[store].get('isOnline');
