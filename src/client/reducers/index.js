import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import comments from './comments'
import current from './current';

const rootReducer = combineReducers({
  routing: routerReducer,
  posts,
  comments,
  current
})

export default rootReducer
