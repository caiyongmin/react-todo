import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

export default class AddItem extends React.Component {
  	constructor(props) {
    	super(props)
    	this.closePop = this.closePop.bind(this)
    	this.preventEventBubble = this.preventEventBubble.bind(this)
    	this.onDeleteItem = this.onDeleteItem.bind(this)
  	}

  	closePop() {
  		this.props.hideDeletePop()
  	}

  	preventEventBubble(e) {
  		e.stopPropagation()
  	}

  	onDeleteItem(e) {
  		e.preventDefault()
  		this.props.deleteItem()
  	}

  	render() {
    	let popClass = classNames({
    		'model': true,
    		'model-delete-item': true,
    		'show': this.props.showDelPop})

		return (
			<div className={popClass} onClick={this.closePop}>
				<div className="model-body" onClick={this.preventEventBubble}>
					<h3 className="model-title">删除任务</h3>
					<div className="model-confirm-tip">确定要删除任务吗？</div>
					<div className="form-group">
						<button className="btn btn-submit" onClick={this.onDeleteItem}>确认</button>
						<button className="btn btn-cancel" onClick={this.closePop}>取消</button>
					</div>
					<span className="fa fa-close model-close" onClick={this.closePop}></span>
				</div>
			</div>
		)
  	}
}