const store = 'ui';

export const uiSelectors = {
    selectIsFetching: (state) => state[store].get('isFetching'),
    selectIsOnline:   (state) => state[store].get('isOnline'),
};
