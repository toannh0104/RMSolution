import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import Dashboard from './containers/DashboardPage';

import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
