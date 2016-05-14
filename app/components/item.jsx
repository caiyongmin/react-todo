import React from 'react'
import {Link} from 'react-router'

export default class Item extends React.Component {
  	constructor(props) {
    	super(props)
  	}

  	render() {
    	let task = this.props.task

		return (
			<li className="task-item">
				<p className="task-item-hd">
					<span className="task-item-title">{task.name}</span>
					<span className="task-item-date">{task.created}</span>
				</p>
				<p className="task-item-body">
					<i className={'fa ' + (task.finished ? 'fa-check-square-o state-finished' : 'fa-clock-o state-unfinished')}></i>
					<span className="task-item-status">{task.finished ? '已完成' : '未完成'}</span>
				</p>
				<Link to={`task/${task.id}`}></Link>
			</li>
		)
  	}
}