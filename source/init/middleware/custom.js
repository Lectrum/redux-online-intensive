export function customThunk (store) {
    // У нас есть доступ к store: можем вызывать методы store.dispatch и store.getState
    return function (next) {
        // next - эту функцию можно вызвать с объектом action, чтобы передать ее дальше по цепочке middleware или редьюсеру, если middleware в цепочке больше не осталось.
        return function (action) {
            if (typeof action === 'function') {
                return action(store.dispatch, store.getState);
            }

            //console.log('-> custom thunk-middleware', store.getState(), action);

            return next(action); // Без этой инструкции middleware проглотит экшн и не пустит его дальньше по цепочке.
        };
    };
}

// Каждая функция middleware вызывается при каждом запуске экшна.
