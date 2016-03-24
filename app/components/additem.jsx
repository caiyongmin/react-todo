var React = require('react')
var ReactDOM = require('react-dom')
var classNames = require('classnames')

var AddItem = React.createClass({
	closePop: function () {
		this.props.hidePop()
	},

	preventEventBubble: function (e) {
		e.stopPropagation()
	},

	onAddItem: function (e) {
		e.preventDefault()

		var name = this.refs.taskName.value.trim()
		var desc = this.refs.taskDesc.value.trim()

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
	},

	render: function () {
		var popClass = classNames({
					'addpop': true,
					'show': this.props.thisShowPop
				})

		return (
			<div className={popClass} onClick={this.closePop}>
				<div className="add-input" onClick={this.preventEventBubble}>
					<h3>Add Task</h3>
					<div className="form-group">
						<label>name: </label>
						<input type="text" ref="taskName" />
					</div>
					<div className="form-group">
						<label>desc: </label>
						<textarea ref="taskDesc"></textarea>
					</div>
					<div className="form-group">
						<button onClick={this.onAddItem}>Submit</button>
					</div>
					<span className="fa fa-close pop-cls" onClick={this.closePop}></span>
				</div>
			</div>
		)
	}
})

module.exports = AddItem