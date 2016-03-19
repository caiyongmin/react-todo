/*
* util tool function
*/

function moment (time) {
	var obj = {};
	obj.Y = time.getFullYear()
	obj.M = time.getMonth() + 1
	obj.D = time.getDate()
	obj.H = time.getHours()
	obj.m = time.getMinutes()
	obj.s = time.getSeconds()
	return obj
}

module.exports = {
	moment: moment
}