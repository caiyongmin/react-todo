/*
	action type
 */

const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const FINISH_TASK = 'FINISH_TASK'
const SHOW_ADD_POP = 'SHOW_ADD_POP'
const HIDE_ADD_POP = 'HIDE_ADD_POP'
const SHOW_DELETE_POP = 'SHOW_DELETE_POP'
const HIDE_DELETE_POP = 'HIDE_DELETE_POP'

module.exports.actionType = {
	ADD_TASK: ADD_TASK,
	DELETE_TASK: DELETE_TASK,
	FINISH_TASK: FINISH_TASK,
	SHOW_ADD_POP: SHOW_ADD_POP,
	HIDE_ADD_POP: HIDE_ADD_POP,
	SHOW_DELETE_POP: SHOW_DELETE_POP,
	HIDE_DELETE_POP: HIDE_DELETE_POP
}

/*
	action creator
 */

module.exports.addTask = function (name, desc) {
	return {
		type: ADD_TASK,
		name,
		desc
	}
}

module.exports.deleteTask = function (id) {
	return {
		type: DELETE_TASK,
		id
	}
}

module.exports.finishTask = function (id, thought) {
	return {
		type: FINISH_TASK,
		id,
		thought
	}
}

module.exports.showAddPop = function () {
	return {
		type: SHOW_ADD_POP,
		showAddPop: true
	}
}

module.exports.hideAddPop = function () {
	return {
		type: HIDE_ADD_POP,
		showAddPop: false
	}
}

module.exports.showDeletePop = function () {
	return {
		type: SHOW_DELETE_POP,
		showDeletePop: true
	}
}

module.exports.hideDeletePop = function () {
	return {
		type: HIDE_DELETE_POP,
		showDeletePop: false
	}
}