import { apply, put } from 'redux-saga/effects';
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { authActions } from '../../actions';
import { profileActions } from '../../../profile/actions';
import { actions } from 'react-redux-form';

export function* authenticate () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.authenticate);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            if (response.status === 401) {
                yield apply(localStorage, localStorage.removeItem, ['token']);
                yield apply(localStorage, localStorage.removeItem, ['remember']);

                return null;
            }
            throw new Error(message);
        }

        yield apply(localStorage, localStorage.setItem, ['token', profile.token]);

        yield put(profileActions.fillProfile(profile));
        yield put(actions.change('forms.user.profile.firstName', profile.firstName));
        yield put(actions.change('forms.user.profile.lastName', profile.lastName));
        yield put(authActions.authenticate());
    } catch (error) {
        yield put(uiActions.emitError(error, ''));
    } finally {
        yield put(authActions.initialize());
        yield put(uiActions.stopFetching());
    }
}
