/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'

// import css
import css from './styles/style.styl'

// import components
import App from './components/App'

// import react router
import { Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'))
