angular.module('starter.services', [])

.service('LoginService', function($q) {
	return {
		loginUser: function(name, pw, details) {
			var deferred = $q.defer();
			var promise = deferred.promise;
			for(var i=0; i < details.length; i++){
				if (name === details[i].name && pw === details[i].username) {
					deferred.resolve('Welcome ' + name + '!');
				} 
			}
			promise.success = function(fn) {
				promise.then(fn);
				return promise;
			}
			promise.error = function(fn) {
				promise.then(null, fn);
				return promise;
			}
			deferred.resolve("Welcome");
			return promise;
		}
	}
})

.factory('$localstorage', ['$window', function($window) {
	return {
		set: function(key, value) {
			$window.localStorage[key] = value;
		},
		get: function(key, defaultValue) {
			return $window.localStorage[key] || defaultValue;
		},
		setObject: function(key, value) {
			$window.localStorage[key] = JSON.stringify(value);
		},
		getObject: function(key) {
			return JSON.parse($window.localStorage[key] || '{}');
		}
	}
}]);