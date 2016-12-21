import React from 'react';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import store, { history } from './store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';


export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="login" component={LoginPage}/>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard}/>
        <Route path="*" component={NotFoundPage}/>
      </Route>
    </Router>
</Provider>
);
