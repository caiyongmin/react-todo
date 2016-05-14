import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

export default class AddItem extends React.Component {
  	constructor(props) {
    	super(props)
    	this.closePop = this.closePop.bind(this)
    	this.preventEventBubble = this.preventEventBubble.bind(this)
    	this.onAddItem = this.onAddItem.bind(this)
  	}

  	closePop() {
  		this.props.hidePop()
  	}

  	preventEventBubble(e) {
  		e.stopPropagation()
  	}

  	onAddItem(e) {
  		e.preventDefault()

		let name = this.refs.taskName.value.trim()
		let desc = this.refs.taskDesc.value.trim()

		if (!name) {
			alert('Please input task name')
			this.refs.taskName.focus()
			return
		}

		if (!desc) {
			alert('Please input task desc')
			this.refs.taskDesc.focus()
			return
		}

		this.refs.taskName.value = ''
		this.refs.taskDesc.value = ''

		this.props.addItem(name, desc)
  	}

  	render() {
    	let popClass = classNames({'addpop': true, 'show': this.props.showAddPop})

		return (
			<div className={popClass} onClick={this.closePop}>
				<div className="add-input" onClick={this.preventEventBubble}>
					<h3>来一个任务</h3>
					<div className="form-group">
						<label>名称: </label>
						<input type="text" ref="taskName" />
					</div>
					<div className="form-group">
						<label>描述: </label>
						<textarea ref="taskDesc"></textarea>
					</div>
					<div className="form-group">
						<button onClick={this.onAddItem}>确认</button>
					</div>
					<span className="fa fa-close pop-cls" onClick={this.closePop}></span>
				</div>
			</div>
		)
  	}
}