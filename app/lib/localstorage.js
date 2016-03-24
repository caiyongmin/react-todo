/*
* use window.localStorage save data
*/

/* global defined */

;(function () {
	'use strick'

	var localStorage = window.localStorage

	function storage() {
		function set(key, value) {
			if (typeof value === 'object') {
				value = JSON.stringify(value)
			}

			localStorage.setItem(key, value)
		}

		function get(key) {
			var value = localStorage.getItem(key) || ''

			try {
				return JSON.parse(value)
			} catch (e) {
				return value
			}
		}

		function remove(key) {
			localStorage.removeItem(key)
		}

		return {
			set: set,
			get: get,
			remove: remove
		}
	}

	if (typeof defined !== 'undefined' && defined.amd && typeof defined.amd === 'object') {
		defined(function () {
			return storage
		})
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = storage
	} else {
		window.storage = storage
	}

})();