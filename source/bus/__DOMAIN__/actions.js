// Types
import { types } from "./types";

export const actions = {
    action: (data) => {
        return {
            type:    types.TYPE,
            payload: data,
        };
    },
};
