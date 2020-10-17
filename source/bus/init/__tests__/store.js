
import { combineReducers, createStore } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import { postsReducer as posts } from '../../posts/reducer';
import { uiReducer as ui } from '../../ui/reducer';
import { authReducer as auth } from '../../auth/reducer';
import { profileReducer as profile } from '../../profile/reducer';
import { usersReducer as users } from '../../users/reducer';
import { formReducer as forms } from '../../forms/reducer';

import { store } from '../store';

export const referenceRootReducer = combineReducers({ posts, auth, ui, profile, router, users, forms });
const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
    test('should have valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});
