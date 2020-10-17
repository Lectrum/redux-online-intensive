import { uiReducer } from "../reducer";
import { uiActions } from "../actions";

describe("ui reducer", () => {
    test("should return initial state ", () => {
        expect(uiReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
  "error": "",
}
`);
    });

    test("should handle start fetching action", () => {
        expect(uiReducer(void 0, uiActions.startFetching()))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": true,
  "isOnline": false,
  "error": "",
}
`);
    });

    test("should handle stop fetching action", () => {
        expect(uiReducer(void 0, uiActions.stopFetching()))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
  "error": "",
}
`);
    });

    test("should handle set online state", () => {
        expect(uiReducer(void 0, uiActions.setOnlineState()))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": true,
  "error": "",
}
`);
    });

    test("should handle offline state", () => {
        expect(uiReducer(void 0, uiActions.setOfflineState()))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
  "error": "",
}
`);
    });

    test("should handle emit error", () => {
        expect(uiReducer(void 0, uiActions.emitError({ code: 400 })))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
  "error": Object {
    "error": Object {
      "code": 400,
    },
    "message": "",
  },
}
`);
    });
});
