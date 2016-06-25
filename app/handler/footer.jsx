import React from 'react'
import {Link, IndexLink} from 'react-router'

export default class Footer extends React.Component {
  	constructor(props) {
    	super(props)
  	}

  	render() {
    	return (
      		<div className="section-footer">
                <ul className="footer-menu clearfix">
                    <li>
                        <IndexLink to={`/`} activeClassName="active" className="fa fa-tasks"></IndexLink>
                    </li>
                    <li>
                        <Link to={`/tasks/complete`} activeClassName="active" className="fa fa-check-circle"></Link>
                    </li>
                    <li>
                        <Link to={`/tasks/uncomplete`} activeClassName="active" className="fa fa-clock-o"></Link>
                    </li>
                </ul>
            </div>
    	)
  	}
}
