var React = require('react')
var Link = require('react-router').Link

var Item = React.createClass({
	render: function () {
		var task = this.props.task

		return (
			<li>
				<p className="task-name">{task.name}<span>{task.created}</span></p>
				<p>
					<i className={'fa ' + (task.finished ? 'fa-check-o unfinished' : 'fa-check-square-o finished')}></i>
				</p>
				<Link to={`task/${task.id}`}></Link>
			</li>
		)
	}
})

module.exports = Item