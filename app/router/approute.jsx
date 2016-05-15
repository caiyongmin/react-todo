import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

import AddItem from '../components/additem'
import Storage from '../lib/localstorage'
import util from '../lib/util'

let moment = util.moment

export default class AppRoute extends React.Component {
    constructor() {
        super()
        this.state = {showAddPop: false, tasks: []}
        this.showPop = this.showPop.bind(this)
        this.hidePop = this.hidePop.bind(this)
        this.addTask = this.addTask.bind(this)
        this.finishTask = this.finishTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.storage = Storage()
    }

    componentDidMount() {
        let tasks = this.storage.get('tasks') || []
        this.setState({'tasks': tasks})
    }

    showPop() {
        this.setState({showAddPop: true})
    }

    hidePop() {
        this.setState({showAddPop: false})
    }

    addTask(name, desc) {
        let nowTime = new Date()
        nowTime = moment(nowTime)
        let created = nowTime.Y + '年' + nowTime.M + '月' + nowTime.D + '日'
        let tasks = this.state.tasks
        if (!Array.isArray(tasks)) {
            alert('tasks is expacted be a Array.')
            return
        }
        let taskId = tasks[0] ? tasks[0].id + 1 : 1
        let task = {
            id: taskId,
            created: created,
            name: name,
            desc: desc,
            state: 0,
            finished: null,
            thought: ''
        }

        tasks.unshift(task)
        this.setState({tasks: tasks})
        this.storage.set('tasks', tasks)
        this.hidePop()
    }

    finishTask(id, thought) {
        let nowTime = new Date()
        nowTime = moment(nowTime)
        let finished = nowTime.Y + '年' + nowTime.M + '月' + nowTime.D + '日'
        let tasks = this.state.tasks
        let task = null

        tasks.forEach(function (item, index) {
            if (item.id == id) {
                task = item
            }
        })

        if (!task) {
            return
        }

        task.finished = finished
        task.thought = thought
        task.state = 1

        tasks.forEach(function (item, index) {
            if (item.id === id) {
                tasks[index] = task
            }
        })

        this.setState({tasks: tasks})
        this.storage.set('tasks', tasks)
    }

    deleteTask(id) {
        let tasks = this.state.tasks
        let task = null

        tasks.forEach(function (item, index) {
            if (item.id == id) {
                task = item
            }
        })

        if (!task) {
            return
        }

        tasks.forEach(function (item, index) {
            if (item.id == id) {
                tasks.splice(index, 1)
            }
        })

        this.setState({tasks: tasks})
        this.storage.set('tasks', tasks)
    }

    render() {
        return (
        <div>
            <div className="section-header">
                <h2 className="header-title">任务清单</h2>
                <i className="icon-add fa fa-plus" onClick={this.showPop}></i>
            </div>
            <div className="section-body">
				{this.props.children && React.cloneElement(this.props.children, {
	                tasks: this.state.tasks,
                    deleteTask: this.deleteTask,
	                finishTask: this.finishTask,
	                showPop: this.showPop,
	                hidePop: this.hidePop,
	            })}
	            <AddItem addItem={this.addTask} showAddPop={this.state.showAddPop} hidePop={this.hidePop}></AddItem>
            </div>
            <div className="section-footer">
                <ul className="footer-menu">
                    <li>
                        <Link to={`/tasks`} activeClassName="active" className={'fa fa-tasks ' + (window.location.hash == '#/' ? 'active' : '')}></Link>
                    </li>
                    <li>
                        <Link to={`/tasks/complete`} activeClassName="active" className="fa fa-check-circle"></Link>
                    </li>
                    <li>
                        <Link to={`/tasks/uncomplete`} activeClassName="active" className="fa fa-clock-o"></Link>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}