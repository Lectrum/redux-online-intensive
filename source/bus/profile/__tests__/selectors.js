import { profileSelectors } from "../selectors";
import { fromJS } from "immutable";

const state = {
    profile: fromJS(__.userProfile)
};

describe("profile selectors", () => {
    test("should select profile", () => {
        expect(profileSelectors.selectProfile(state)).toMatchInlineSnapshot(`
Immutable.Map {
  "id": "TEST_ID",
  "avatar": "TEST_AVATAR",
  "firstName": "Walter",
  "lastName": "White",
  "token": "TEST_TOKEN",
}
`);
    });

    test("should select profile base", () => {
        expect(profileSelectors.selectProfileBase(state))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "TEST_ID",
  "lastName": "White",
  "firstName": "Walter",
}
`);
    });
});
