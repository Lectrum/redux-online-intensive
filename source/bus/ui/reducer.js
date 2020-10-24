// Core
import { Map } from "immutable"; // Map - как объект в JS, только иммутаблельный.

// Types
import { types } from "./types";

const initialState = Map({
    isFetching: false,
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_FETCHING:
            return state.set("isFetching", true);

        case types.STOP_FETCHING:
            return state.set("isFetching", false);

        default: return state;
    }
};
