// Core
import { put, apply } from "redux-saga/effects";
//import { delay } from "redux-saga";

// Instruments
import { api } from "../../../../REST";
import { authActions } from "../../actions";
import { uiActions } from "../../../ui/actions";
import { profileActions } from "../../../profile/actions";

export function* signup ({ payload: userInfo }) {
    try {
        yield put(uiActions.startFetching());

        console.log('-> userInfo', userInfo);
        //yield delay(2000);

        const response = yield apply(api, api.auth.signup, [userInfo]);
        const { data: profile, message } = yield apply(response, response.json);

        console.log('-> profile', profile);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.fillProfile(profile));
        yield put(authActions.authenticate());
    } catch (error) {
        yield put(uiActions.emitError(error, 'signup worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
