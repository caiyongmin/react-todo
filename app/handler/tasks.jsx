var React = require('react')

var Item = require('../component/item')

var Tasks = React.createClass({
	render: function () {
		var tasks = this.props.tasks
		var typeMap = {uncomplete: 0, complement: 1, all: 2}
		var type = typeMap[this.params.type] || 2

		if (!tasks.length) {
			if (type === 2) {
				return (
					<div className="tasks wrap">
						<h2><span>You have not tasks, you can </span><i className="fa fa-plus"></i><span> this task first!</span></h2>
					</div>
				)
			} else if (type === 0) {
				return (
					<div className="tasks wrap">
						<h2><span>You have no uncompleted tasks. You can </span><i className="fa fa-plus"></i><span> this task first!</span></h2>
					</div>
				)
			} else if (type === 1) {
				return (
					<div className="tasks wrap">
						<h2><span>You have no completed tasks. You can complete the task or </span><i className="fa fa-plus"></i><span> this task first!</span></h2>
					</div>
				)
			}
		} else {
			tasks.filter(function (task, index) {
				return task.type === type
			})
			var tasksDOM = tasks.map(function (task, index) {
				return <Item task={task}>
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