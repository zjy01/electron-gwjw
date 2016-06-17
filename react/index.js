/**
 * Created by carvenzhang on 2016/6/16.
 */
'use strict';
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { Router, browserHistory } from 'react-router'

import createStore from './store'
import reducers from './reducers'
import router from './router'
const store = createStore(reducers);

const appElement = document.getElementById('app');

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			{router(store.getState())}
		</Router>
	</Provider>,
	appElement
);
