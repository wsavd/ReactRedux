import { combineReducers } from 'redux';

import PostsReducer from './reducer_posts';//вооз одного из редусеров

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;