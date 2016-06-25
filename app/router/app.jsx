import React from 'react'
import ReactDOM from 'react-dom'
import {Link, IndexLink} from 'react-router'

import AddItem from '../components/additem'
import Header from '../handler/header'
import Footer from '../handler/footer'
import Storage from '../lib/localstorage'
import action from '../lib/action'
import util from '../lib/util'

let moment = util.moment

export default class AppRoute extends React.Component {
    constructor() {
        super()
        this.state = {showAddPop: false, tasks: []}
        this.showPop = action.showPop.bind(this)
        this.hidePop = action.hidePop.bind(this)
        this.addTask = action.addTask.bind(this)
        this.finishTask = action.finishTask.bind(this)
        this.deleteTask = action.deleteTask.bind(this)
    }

    componentDidMount() {
        if (!this.storage) {
            this.storage = Storage()
        }
        let tasks = this.storage.get('tasks') || []
        this.setState({'tasks': tasks})
    }

    render() {
        return (
        <div>
            <Header />
            <div id="section-body" className="section-body">
				{this.props.children && React.cloneElement(this.props.children, {
	                tasks: this.state.tasks,
                    deleteTask: this.deleteTask,
	                finishTask: this.finishTask,
	                showPop: this.showPop,
	                hidePop: this.hidePop,
	            })}
                <div className="icon-add-wrap" onClick={this.showPop}><i className="fa fa-plus icon-add"></i></div>
	            <AddItem addItem={this.addTask} showAddPop={this.state.showAddPop} hidePop={this.hidePop}></AddItem>
            </div>
            <Footer />
        </div>
        )
    }
}