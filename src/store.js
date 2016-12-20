import {createStore, applyMiddleware, combineReducers} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
// import the root reducer
//import rootReducer from './reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { reducer as reduxFormReducer } from 'redux-form'


const reducers = combineReducers({
  //todos,
  form: reduxFormReducer
})



const middleware = applyMiddleware(thunk, logger());

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(
    reducers,
    persistedState,
    middleware
)

//export const history = syncHistoryWithStore(browserHistory, store);
/*
if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}
*/
export default store;