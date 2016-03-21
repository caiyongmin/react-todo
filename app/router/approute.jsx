var React = require('react')
var ReactDOM = require('react-dom')
var Link = require('react-router').Link

var AddItem = require('../components/additem')

var Storage = require('../lib/localstorage')()
var util = require('../lib/util')
var moment = util.moment

var AppRoute = React.createClass({
	getInitialState: function () {
		return {
			thisShowPop: false,
			tasks: []
		}
	},

	componentDidMount: function () {
		var tasks = Storage.get('tasks') || []
		this.setState({tasks: tasks})
	},

	showPop: function () {
		this.setState({
			thisShowPop: true
		})
	},

	hidePop: function () {
		this.setState({
			thisShowPop: false
		})
	},

	addItem: function (name, desc) {
		var nowTime = new Date()
		nowTime = moment(nowTime)
		var created = nowTime.Y + '年' + nowTime.M + '月' + nowTime.D + '日 ' + nowTime.H + ':' + nowTime.m + ':' + nowTime.s
		var tasks = this.state.tasks
		var taskId = tasks[0] ? tasks[0].id + 1 : 1
		var task = {
			id: taskId,
			created: created,
			name: name,
			desc: desc,
			type: 0,
			finished: null,
			thought: ''
		}

		tasks.unshift(task)
		this.setState({tasks: tasks})
		Storage.set('tasks', tasks)
	},

	finishItem: function (id, thought) {
		var nowTime = new Date()
		nowTime = moment(nowTime)
		var finished = nowTime.Y + '年' + nowTime.M + '月' + nowTime.D + '日 ' + nowTime.H + ':' + nowTime.m + ':' + nowTime.s
		var tasks = this.state.tasks
		var task = null

		tasks.forEach(function (item, index) {
			if (item.id === id) {
				task = item
			}
		})

		if (!task) {
			return
		}

		task.finished = finished
		task.thought = thought

		tasks.forEach(function (item, index) {
			if (item.id === id) {
				tasks[index] = task
			}
		})

		this.setState({tasks: tasks})
		Storage.set('tasks', tasks)
	},

	render: function () {
		return (
			<div>
				<header className="header">
					<h2>Todo List</h2>
					<div className="fa fa-plus"></div>
				</header>
				{this.props.children && React.cloneElement(this.props.children, {
					tasks: this.state.tasks,
					finishItem: this.finishItem,
					showPop: this.showPop
				})}
				<AddItem addItem={this.additem} thisShowPop={this.state.thisShowPop} hidePop={this.hidePop}></AddItem>
				<nav className="menu">
					<ul>
						<li>
							<Link to={`/tasks`} className={'fa fa-tasks ' + window.location.pathname == '/' ? 'active' : ''} activeClassName="active"></Link>
						</li>
						<li>
							<Link to={`/tasks/complete`} activeClassName="active" className="fa fa-check-circle"></Link>
						</li>
						<li>
							<Link to={`/tasks/uncomplete`} activeClassName="active" className="fa fa-clock-o"></Link>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
})

module.exports = AppRoute