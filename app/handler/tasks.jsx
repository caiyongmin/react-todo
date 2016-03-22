var React = require('react')

var Item = require('../components/item')

var Tasks = React.createClass({
	showPop: function () {
		this.props.showPop()
	},

	render: function () {
		var tasks = this.props.tasks
		var typeMap = {
			'uncomplete': 0,
			'complete': 1,
			'all': 2
		}
		var type = 2;
		if (typeof typeMap[this.props.params.type] != 'undefined') {
			type = typeMap[this.props.params.type]
		}

		if (type !== 2) {
			tasks = tasks.filter(function (task, index) {
				return task.state === type
			})
		}

		if (!tasks.length) {
			switch (type) {
				case 0:
					return (
						<div className="tasks wrap">
							<h2><span>You have no uncompleted tasks. You can </span><i className="fa fa-plus" onClick={this.showPop}></i><span> this task first!</span></h2>
						</div>
					)
					break
				case 1:
					return (
						<div className="tasks wrap">
							<h2><span>You have no completed tasks. You can complete the task or </span><i className="fa fa-plus" onClick={this.showPop}></i><span> this task first!</span></h2>
						</div>
					)
					break
				default:
					return (
						<div className="tasks wrap">
							<h2><span>You have not tasks, you can </span><i className="fa fa-plus" onClick={this.showPop}></i><span> this task first!</span></h2>
						</div>
					)
					break
			}
		} else {
			var tasksDOM = tasks.map(function (task, index) {
				return (<Item task={task}>)
			})
			return (
				<div className="tasks wrap">
					<ul>
						{tasksDOM}
					</ul>
				</div>
			)
		}
	}
})

module.exports = Tasks