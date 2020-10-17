import { types } from './types';

export const usersActions = {
    fillUsers: (users) => {
        return {
            type:    types.FILL_USERS,
            payload: users,
        };
    },
    clearUsers: () => {
        return {
            type: types.CLEAR_USERS,
        };
    },
    fetchUsersAsync: () => {
        return {
            type: types.FETCH_USERS_ASYNC,
        };
    },
};
