import util from './util'

const moment = util.moment

module.exports.showPop = function () {
    this.setState({showAddPop: true})
}

module.exports.hidePop = function () {
    this.setState({showAddPop: false})
}

module.exports.addTask = function (name, desc) {
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

module.exports.finishTask = function (id, thought) {
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

module.exports.deleteTask = function (id) {
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