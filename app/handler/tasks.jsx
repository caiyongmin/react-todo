import React from 'react'

import Item from '../components/item'

export default class Tasks extends React.Component {
  	constructor(props) {
    	super(props)
    	this.showPop = this.showPop.bind(this)
  	}

  	showPop() {
  		this.props.showPop()
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
				return (<Item key={task.id} task={task}/>)
			})
			return (
				<div className="tasks wrap">
					<ul>
						{tasksDOM}
					</ul>
				</div>
			)
		} else {
			switch (type) {
				case 0:
					return (
						<div className="tasks wrap">
							<h2><span>暂时没有未完成任务. 你可以点击 </span><i className="fa fa-plus" onClick={this.showPop}></i><span> 添加任务。</span></h2>
						</div>
					)
					break
				case 1:
					return (
						<div className="tasks wrap">
							<h2><span>暂时没有已完成任务. 你可以点击 </span><i className="fa fa-plus" onClick={this.showPop}></i><span> 添加任务，然后完成它。</span></h2>
						</div>
					)
					break
				default:
					return (
						<div className="tasks wrap">
							<h2><span>暂时没有任务, 你可以点击 </span><i className="fa fa-plus" onClick={this.showPop}></i><span> 添加任务。</span></h2>
						</div>
					)
					break
			}
		}
  	}
}