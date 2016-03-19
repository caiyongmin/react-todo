var React = require('react')
var ReactDOM = require('react-dom')
var Router = require('react-router').Router
var Route = require('react-router').Route
var IndexRoute = require('react-router').IndexRoute
var Link = require('react-router').Link
var createHashHistory = require('history').createHashHistory

var AppRoute = require('./router/approute')
var Tasks = require('./handler/tasks')
var Task = require('./handler/task')
var FontAwesome = require('./css/font-awesome.min.css')
var IndexCSS = require('./css/index.css')
var NormalizeCSS = require('./css/normalize.css')

var history = createHashHistory({queryKey: false})

ReactDOM.render(
	<Router history={history}>
		<Route path='/' component={AppRoute}>
			<IndexRoute component={Tasks} />
			<Route path='tasks(/:type)' component={Tasks} />
			<Route path='task/:id' component={Task} />
		</Route>
	</Router>,
	document.getElementById('app')
)