import React from 'react'

export default class Header extends React.Component {
  	constructor(props) {
    	super(props)
  	}

  	render() {
    	return (
      		<div className="section-header">
                <h2 className="header-title">任务清单</h2>
                <i className="fa fa-calendar icon-app"></i>
            </div>
    	)
  	}
}
