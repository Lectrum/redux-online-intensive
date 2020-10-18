import { apply, put } from "redux-saga/effects";
import { cloneableGenerator } from "redux-saga/utils";
import { api } from "../../../REST";
import { usersActions } from "../../users/actions";
import { uiActions } from "../../ui/actions";

import { fetchUsers } from "../saga/workers";

const fetchUsersAction = usersActions.fetchUsersAsync();

const saga = cloneableGenerator(fetchUsers)(fetchUsersAction);
let clone = null;

describe("fetch users saga", () => {
    describe("should pass until response received", () => {
        test("should dispatch start of fetching action", () => {
            expect(saga.next().value).toEqual(put(uiActions.startFetching()));
        });

        test("should call users fetch api", () => {
            expect(saga.next().value).toEqual(apply(api, api.users.fetch));
            clone = saga.clone();
        });
    });

    describe("should handle a 400 status response", () => {
        test("a fetch request should return 400 status response", () => {
            expect(clone.next(__.fetchResponseFail400).value).toEqual(
                apply(__.fetchResponseFail400, __.fetchResponseFail400.json)
            );
        });

        test("should contain a response data object", () => {
            expect(clone.next(__.responseDataFail).value).toEqual(
                put(uiActions.emitError(__.error, ""))
            );
        });

        test("should dispatch stop fetching action", () => {
            expect(clone.next().value).toEqual(put(uiActions.stopFetching()));
        });
    });

    describe("should handle a 200 status response", () => {
        test("a fetch should return a 200 status response data object", () => {
            expect(saga.next(__.fetchResponseSuccess).value).toEqual(
                apply(__.fetchResponseSuccess, __.fetchResponseSuccess.json)
            );
        });

        test("should fill users", () => {
            expect(saga.next(__.responseDataSuccessProfiles).value)
                .toMatchInlineSnapshot(`
Object {
  "@@redux-saga/IO": true,
  "PUT": Object {
    "action": Object {
      "payload": Array [
        Object {
          "avatar": "TEST_AVATAR",
          "firstName": "Walter",
          "id": "TEST_ID",
          "lastName": "White",
          "token": "TEST_TOKEN",
        },
        Object {
          "avatar": "TEST_AVATAR",
          "firstName": "Walter",
          "id": "TEST_ID_2",
          "lastName": "White",
          "token": "TEST_TOKEN",
        },
        Object {
          "avatar": "TEST_AVATAR",
          "firstName": "Walter",
          "id": "TEST_ID_3",
          "lastName": "White",
          "token": "TEST_TOKEN",
        },
      ],
      "type": "FILL_USERS",
    },
    "channel": null,
  },
}
`);
        });

        test('should dispatch stop fetching', () => {
            expect(saga.next().value).toEqual(put(uiActions.stopFetching()));
        });

        test('should finish', () => {
            expect(saga.next().done).toBe(true);
        });

    });
});
