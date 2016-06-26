import {combineReducers} from 'redux'
import actions from '../actions'
import Util from '../lib/util'
import Storage from '../lib/localstorage'

const actionType = actions.actionType
const moment = Util.moment
const storage = Storage()

/*
	state Data Structure
 */

const initialState = {
	tasks: [],
	showAddPop: false,
	showDeletePop: false
}

/*
	reducer
 */

function actionAddTask(name, desc) {
    let nowTime = new Date()
    nowTime = moment(nowTime)
    let created = nowTime.Y + '年' + nowTime.M + '月' + nowTime.D + '日'
    let tasks = state

    if (!Array.isArray(tasks)) {
        alert('tasks is expacted be a Array.')
        return tasks
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
    storage.set('tasks', tasks)
    return tasks
}

function actionFinishTask(id, thought) {
    let nowTime = new Date()
    nowTime = moment(nowTime)
    let finished = nowTime.Y + '年' + nowTime.M + '月' + nowTime.D + '日'
    let tasks = state
    let task = null

    tasks.forEach(function (item, index) {
        if (item.id == id) {
            task = item
        }
    })
    if (!task) {
        return tasks
    }
    task.finished = finished
    task.thought = thought
    task.state = 1
    tasks.forEach(function (item, index) {
        if (item.id === id) {
            tasks[index] = task
        }
    })
    storage.set('tasks', tasks)
    return tasks
}

function actionDeleteTask(id) {
    let tasks = state
    let task = null

    tasks.forEach(function (item, index) {
        if (item.id == id) {
            task = item
        }
    })
    if (!task) {
        return tasks
    }
    tasks.forEach(function (item, index) {
        if (item.id == id) {
            tasks.splice(index, 1)
        }
    })

    storage.set('tasks', tasks)
    return tasks
}

const operateTask = function (state = initialState.tasks, action) {
	switch (action.type) {
		case actionType.ADD_TASK:
			return actionAddTask(action.name, action.desc)
			break
		case actionType.FINISH_TASK:
			return actionFinishTask(action.id, action.thought)
			break
		case actionType.DELETE_TASK:
			return actionDeleteTask(action.id)
			break
		default:
			return state
	}
}

const shouldShowAddPop = function (state = initialState.showAddPop, action) {
	switch (action.type) {
		case actionType.SHOW_ADD_POP:
			return action.showAddPop
		default:
			return state
	}
}

const shouldShowDeletePop = function (state = initialState.showDeletePop, action) {
	switch (action.type) {
		case actionType.SHOW_DELETE_POP:
			return action.showDeletePop
		default:
			return state
	}
}

const taskApp = combineReducers({
	tasks: operateTask,
	showAddPop: shouldShowAddPop,
	showDeletePop: shouldShowDeletePop
})

export default taskApp