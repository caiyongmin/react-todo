import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './app'
import Tasks from '../handler/tasks'
import Task from '../handler/task'
import FontAwesome from '../css/font-awesome.min.css'
import IndexCSS from '../css/index.css'
import NormalizeCSS from '../css/normalize.css' 

module.exports = (
	<Route path='/' component={App}>
		<IndexRoute component={Tasks} />
		<Route path='tasks(/:type)' component={Tasks} />
		<Route path='task/:id' component={Task} />
	</Route>
)