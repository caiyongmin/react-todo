/*
* util tool function
*/

function numberPrefix(num) {
	if (typeof num !== 'number') {
		return num
	}
	if (num < 10) {
		return '0' + num
	} else {
		return num
	}
}

function moment(time) {
	var obj = {};
	obj.Y = time.getFullYear()
	obj.M = numberPrefix(time.getMonth() + 1)
	obj.D = numberPrefix(time.getDate())
	obj.H = numberPrefix(time.getHours())
	obj.m = numberPrefix(time.getMinutes())
	obj.s = numberPrefix(time.getSeconds())
	return obj
}

module.exports = {
	moment: moment
}