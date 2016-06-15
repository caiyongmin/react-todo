import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, Link, useRouterHistory, browserHistory} from 'react-router'
import {createHashHistory} from 'history'

import AppRoute from './router/approute'
import Tasks from './handler/tasks'
import Task from './handler/task'
import FontAwesome from './css/font-awesome.min.css'
import IndexCSS from './css/index.css'
import NormalizeCSS from './css/normalize.css'

let appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={AppRoute}>
			<IndexRoute component={Tasks} />
			<Route path='tasks(/:type)' component={Tasks} />
			<Route path='task/:id' component={Task} />
		</Route>
	</Router>,
	document.getElementById('app')
)