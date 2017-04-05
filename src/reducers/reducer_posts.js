import _ from 'lodash';
import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      const newPosts = _.mapKeys(action.payload.data, 'id');
      return { ...state, ...newPosts };
  default:
    return state;
  }
}