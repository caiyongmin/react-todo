var React = require('react')

var Task = React.createClass({
	onFinishItem: function () {
		var thought = this.refs.taskThought.value.trim()
		var id = this.refs.taskId.value

		if (!thought) {
			alert('Please input task thought')
			this.refs.taskThought.focus()
			return
		}

		this.refs.taskThought.value = ''
		this.props.finishItem(id, thought) 
	},

	render: function () {
		var tasks = this.props.tasks
		var id = this.props.params.id
		var task = null

		// debugger

		if (!id) {
			return <div>This is no id params.</div>
		}

		tasks.forEach(function (item, index) {
			if (item.id == id) {
				task = item
			}
		})

		// debugger

		if (!task) {
			return <div>This is no task data.</div>
		}

		if (task.state === 0) {
			return (
				<div className="wrap single-task">
					<div className="task-header">
						<h3>{task.name}</h3>
						<p>{task.created}</p>
					</div>
					<div className="task-desc">
						{task.desc}
					</div>
					<div className="task-state">
						<p><span>State: </span><i className="fa fa-clock-o unfinished"></i></p>
					</div>
					<div className="task-over">
						<label>Thought: </label>
						<input type="hidden" ref="taskId" value={task.id} />
						<textarea ref="taskThought"></textarea>
						<button onClick={this.onFinishItem}>Done</button>
					</div>
				</div>
			)
		} else {
			return (
				<div className="wrap single-task">
					<div className="task-header">
						<h3>{task.name}</h3>
						<p>{task.created}</p>
					</div>
					<div className="task-desc">
						{task.desc}
					</div>
					<div className="task-state">
						<p><span>State: </span><i className="fa fa-check-square-o finished"></i></p>
						<p><span>Finished: </span><span>{task.finished}</span></p>
						<p><span>Thought: </span><span>{task.thought}</span></p>
					</div>
				</div>
			)
		}
	}
})

module.exports = Task