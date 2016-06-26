import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

import routes from './router/routes'
import reducer from './reducer'

const store = createStore(
	combineReducers({
		...reducer,
		routing: routerReducer
	})
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider store={store}>
		<Router routes={routes} history={history} />
	</Provider>,
	document.getElementById('app')
)