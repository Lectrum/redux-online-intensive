import { fromJS, List } from 'immutable';
import { now } from 'moment';
import { v4 } from 'uuid';
import { mockedProfile } from '../../instruments/mockedData';

import { CREATE_POST_ASYNC, FILL_POSTS } from './types';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_POSTS:
      return fromJS(action.payload);
    case CREATE_POST_ASYNC:
      let newMessage = {
        id: v4(),
        author: mockedProfile.merge({
          id: v4(),
        }),
        comment: action.payload,
        likes: [],
        profile: mockedProfile.merge({
          id: v4(),
        }),
        created: now(),
      };
      return state.unshift(fromJS(newMessage));
    default:
      return state;
  }
};
