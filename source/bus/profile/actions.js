// Types
import { types } from "./types";

export const profileActions = {
    fillProfile: (profile) => {
        return {
            type:    types.FILL_PROFILE,
            payload: profile,
        };
    },
};
