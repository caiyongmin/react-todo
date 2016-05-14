import React from 'react'
import {Link} from 'react-router'

export default class Item extends React.Component {
  	constructor(props) {
    	super(props)
  	}

  	render() {
    	let task = this.props.task

		return (
			<li>
				<p className="task-name">{task.name}<span>{task.created}</span></p>
				<p>
					<i className={'fa ' + (task.finished ? 'fa-check-square-o finished' : 'fa-clock-o unfinished')}></i>
					<span className="text">{task.finished ? '已完成' : '未完成'}</span>
				</p>
				<Link to={`task/${task.id}`}></Link>
			</li>
		)
  	}
}