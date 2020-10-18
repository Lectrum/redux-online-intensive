import { uiSelectors } from "../selectors";
import { fromJS } from "immutable";

const state = {
    ui: fromJS({
        isFetching: false,
        isOnline:   true,
    }),
};

describe("ui selectors", () => {
    test("should select is fetching ", () => {
        expect(uiSelectors.selectIsFetching(state)).toMatchInlineSnapshot(
            `false`
        );
    });

    test("should select is online", () => {
        expect(uiSelectors.selectIsOnline(state)).toMatchInlineSnapshot(`true`);
    });
});
