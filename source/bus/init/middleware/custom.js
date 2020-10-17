export function customThunk (store) {
    return function (next) {
        return function (action) {
            if (typeof action === 'function') {
                return action(store.dispatch, store.getState);
            }

            return next(action);
        };
    };
}
