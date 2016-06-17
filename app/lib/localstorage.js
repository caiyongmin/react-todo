/*
* use window.localStorage save data
*/

/* global defined */

;(function () {
	'use strick'

	let localStorage;

	function storage() {
		if (!localStorage) {
			localStorage = window.localStorage
		}
		function set(key, value) {
			if (typeof value === 'object') {
				value = JSON.stringify(value)
			}

			localStorage.setItem(key, value)
		}

		function get(key) {
			let value = localStorage.getItem(key) || ''

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
	} else if (typeof window !== 'undefined') {
		window.storage = storage
	}

})();