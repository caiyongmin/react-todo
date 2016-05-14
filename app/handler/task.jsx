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
				<div className="single-task">
					<div className="single-task-header">
						<h3 className="single-task-title">{task.name}</h3>
					</div>
					<div className="single-task-meta">
						<span className="label">创建时间：</span>
						<span className="single-task-created">{task.created}</span>
					</div>
					<div className="single-task-meta">
						<span className="label">描述：</span>
						<span className="single-task-desc">{task.desc}</span>
					</div>
					<div className="single-task-meta">
						<span className="label">状态: </span>
						<span className="single-task-state"><i className="fa fa-clock-o state-unfinished"></i> 未完成</span>
					</div>
					<div className="single-task-meta">
						<span className="label">想说的话: </span>
						<div className="single-task-thought-input">
							<input type="hidden" ref="taskId" value={task.id} />
							<textarea className="input-textarea" ref="taskThought"></textarea>
							<button className="btn btn-submit" onClick={this.onFinishItem}>确认</button>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div className="single-task">
					<div className="single-task-header">
						<h3 className="single-task-title">{task.name}</h3>
					</div>
					<div className="single-task-meta">
						<span className="label">创建时间：</span>
						<span className="single-task-created">{task.created}</span>
					</div>
					<div className="single-task-meta">
						<span className="label">描述：</span>
						<span className="single-task-desc">{task.desc}</span>
					</div>
					<div className="single-task-meta">
						<span className="label">状态: </span>
						<span className="single-task-state"><i className="fa fa-check-square-o state-finished"></i> 已完成</span>
					</div>
					<div className="single-task-meta">
						<span className="label">完成时间：</span>
						<span className="single-task-finished">{task.finished}</span>
					</div>
					<div className="single-task-meta">
						<span className="label">想说的话: </span>
						<span className="single-task-thought">{task.thought}</span>
					</div>
				</div>
			)
		}
  	}
}