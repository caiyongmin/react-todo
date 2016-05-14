import React from 'react'

export default class Task extends React.Component {
	constructor(props) {
    	super(props)
    	this.onFinishItem = this.onFinishItem.bind(this)
  	}

  	onFinishItem() {
  		let thought = this.refs.taskThought.value.trim()
		let id = this.refs.taskId.value

		if (!thought) {
			alert('说一句你想说的话吧...')
			this.refs.taskThought.focus()
			return
		}

		this.refs.taskThought.value = ''
		this.props.finishTask(id, thought) 
  	}

  	render() {
    	let tasks = this.props.tasks
		let id = this.props.params.id
		let task = null

		if (!id) {
			return <div>This is no id params.</div>
		}

		tasks.forEach(function (item, index) {
			if (item.id == id) {
				task = item
			}
		})

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
						<p><span>状态: </span><i className="fa fa-clock-o unfinished"></i> 未完成</p>
					</div>
					<div className="task-over">
						<label>想说的话: </label>
						<input type="hidden" ref="taskId" value={task.id} />
						<textarea ref="taskThought"></textarea>
						<button onClick={this.onFinishItem}>确认</button>
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
						<p><span>状态: </span><i className="fa fa-check-square-o finished"></i> 已完成</p>
						<p><span>完成时间: </span><span>{task.finished}</span></p>
						<p><span>想说的话: </span><span>{task.thought}</span></p>
					</div>
				</div>
			)
		}
  	}
}