import React from 'react'
import {Link} from 'react-router'

export default class Item extends React.Component {
  	constructor(props) {
    	super(props)
    	this.onDeleteItem = this.onDeleteItem.bind(this)
  	}

  	onDeleteItem() {
  		let taskId = this.refs.taskId.value.trim()

  		if (!taskId) {
  			alert('this is no task id')
  			return
  		}
  		
  		this.props.setDeleteTaskId(taskId)
  		this.props.showPop()
  	}

  	render() {
    	let task = this.props.task

		return (
			<li className="task-item">
				<p className="task-item-hd">
					<span className="task-item-title"><Link className="task-item-link" to={`task/${task.id}`}>{task.name}</Link></span>
					<span className="task-item-date">{task.created}</span>
					<input type="hidden" ref="taskId" value={task.id} />
				</p>
				<p className="task-item-bd">
					<i className={'fa ' + (task.finished ? 'fa-check-square-o state-finished' : 'fa-clock-o state-unfinished')}></i>
					<span className="task-item-status">{task.finished ? '已完成' : '未完成'}</span>
					<i className="fa fa-remove task-item-delete" onClick={this.onDeleteItem}></i>
				</p>
			</li>
		)
  	}
}