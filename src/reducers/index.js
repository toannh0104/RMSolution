import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import employee from './employee';

const rootReducer = combineReducers({employee, routing: routerReducer });

export default rootReducer;
