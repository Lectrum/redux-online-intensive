import { uiActions } from "../actions";

describe("ui actions", () => {
    test("should startFetching", () => {
        expect(uiActions.startFetching()).toMatchInlineSnapshot(`
Object {
  "type": "START_FETCHING",
}
`);
    });

    test("should stopFetching", () => {
        expect(uiActions.stopFetching()).toMatchInlineSnapshot(`
Object {
  "type": "STOP_FETCHING",
}
`);
    });

    test("should setOnline state", () => {
        expect(uiActions.setOnlineState()).toMatchInlineSnapshot(`
Object {
  "type": "SET_ONLINE_STATE",
}
`);
    });

    test("should setOfflineState", () => {
        expect(uiActions.setOfflineState()).toMatchInlineSnapshot(`
Object {
  "type": "SET_OFFLINE_STATE",
}
`);
    });

    test("should emitError", () => {
        expect(uiActions.emitError({ code: 400 })).toMatchInlineSnapshot(`
Object {
  "payload": Object {
    "error": Object {
      "code": 400,
    },
    "message": "",
  },
  "type": "EMIT_ERROR",
}
`);
    });
});
