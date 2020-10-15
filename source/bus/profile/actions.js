import { types } from './types';

export const profileActions = {
    fillProfile: (profile) => {
        return {
            type:    types.FILL_PROFILE,
            payload: profile,
        };
    },
    clearProfile: () => {
        return {
            type: types.CLEAR_PROFILE,
        };
    },
    updateAvatar: (newAvatarUrl) => {
        return {
            type:    types.UPDATE_AVATAR,
            payload: newAvatarUrl,
        };
    },
    updateNameAsync: (newName) => {
        return {
            type:    types.UPDATE_NAME_ASYNC,
            payload: newName,
        };
    },
    updateAvatarAsync: (newAvatar) => {
        return {
            type:    types.UPDATE_AVATAR_ASYNC,
            payload: newAvatar,
        };
    },
};
