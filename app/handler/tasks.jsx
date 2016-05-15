import React from 'react'

import Item from '../components/item'
import DeleteItem from '../components/deleteitem'

export default class Tasks extends React.Component {
  	constructor(props) {
    	super(props)
    	this.state = {showDelPop: false, willDeleteTaskId: -1}
    	this.showPop = this.showPop.bind(this)
    	this.showDeletePop = this.showDeletePop.bind(this)
    	this.hideDeletePop = this.hideDeletePop.bind(this)
    	this.setDeleteTaskId = this.setDeleteTaskId.bind(this)
    	this.deleteItem = this.deleteItem.bind(this)
  	}

  	showPop() {
  		this.props.showPop()
  	}

  	showDeletePop() {
  		this.setState({showDelPop: true})
  	}

  	hideDeletePop() {
  		this.setState({showDelPop: false})
  	}

  	setDeleteTaskId(id) {
  		this.setState({willDeleteTaskId: id})
  	}

  	deleteItem() {
  		let taskId = this.state.willDeleteTaskId
  		this.props.deleteTask(taskId)
  		this.hideDeletePop()
  	}

  	render() {
    	let tasks = this.props.tasks
		let typeMap = {
			'uncomplete': 0,
			'complete': 1,
			'all': 2
		}
		let type = 2
		if (typeof typeMap[this.props.params.type] != 'undefined') {
			type = typeMap[this.props.params.type]
		}

		if (type !== 2) {
			tasks = tasks.filter(function (task, index) {
				return task.state === type
			})
		}

		if (Array.isArray(tasks) && tasks.length) {
			let tasksDOM = tasks.map(function (task, index) {
				return (
					<Item
						showPop={this.showDeletePop}
						key={task.id}
						task={task}
						setDeleteTaskId={this.setDeleteTaskId}/>
				)
			}.bind(this))
			return (
				<div className="task-list-wrap">
					<ul className="task-list">
						{tasksDOM}
					</ul>
					<DeleteItem 
						showDelPop={this.state.showDelPop}
						hideDeletePop={this.hideDeletePop}
						deleteItem={this.deleteItem}></DeleteItem>
				</div>
			)
		} else {
			switch (type) {
				case 0:
					return (
						<div className="task-list-wrap">
							<p className="tip">
								<span>暂时没有未完成任务. 你可以点击 </span><i className="fa fa-plus" onClick={this.showPop}></i><span> 添加任务。</span>
							</p>
						</div>
					)
					break
				case 1:
					return (
						<div className="task-list-wrap">
							<p className="tip">
								<span>暂时没有已完成任务. 你可以点击 </span><i className="fa fa-plus" onClick={this.showPop}></i><span> 添加任务，然后完成它。</span>
							</p>
						</div>
					)
					break
				default:
					return (
						<div className="task-list-wrap">
							<p className="tip">
								<span>暂时没有任务, 你可以点击 </span><i className="fa fa-plus" onClick={this.showPop}></i><span> 添加任务。</span>
							</p>
						</div>
					)
					break
			}
		}
  	}
}