import { List, fromJS } from "immutable";
import { profileReducer } from "../reducer";
import { profileActions } from "../actions";

describe("users reducer", () => {
    test("should return initial state by default", () => {
        expect(profileReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": "",
  "token": "",
}
`);
    });

    test("should fill user profile on fill profile", () => {
        expect(
            profileReducer(void 0, profileActions.fillProfile(__.userProfile))
        ).toMatchInlineSnapshot(`
Immutable.Map {
  "id": "TEST_ID",
  "firstName": "Walter",
  "lastName": "White",
  "avatar": "TEST_AVATAR",
  "token": "TEST_TOKEN",
}
`);
    });

    test("should handle update avatar action", () => {
        expect(profileReducer(void 0, profileActions.updateAvatar(__.url)))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": "https://www.url.com",
  "token": "",
}
`);
    });

    test("should handle clear profile", () => {
        expect(
            profileReducer(void 0, profileActions.clearProfile())
        ).toMatchInlineSnapshot(`Immutable.Map {}`);
    });
});
