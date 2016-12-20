import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import { Router } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './favicon.ico';
import './styles.scss';

injectTapEventPlugin();

import store from './store';
render(
	<Provider store={store}>
    	<Router routes={routes} />
    </Provider>, 
    document.getElementById('app')

);
