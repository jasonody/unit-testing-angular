angular
	.module('testingAngular')
	.factory('userProfile', userProfile);

function userProfile (browserLocalStorage) {
	
	var KEY = 'unique_key_for_profile';
	var profile = {
		token: '',
		expiration: new Date()
	};
	
	initialize();
	
	return {
		profile: profile
	};
	
	function initialize () {
		
		var localProfile = browserLocalStorage.get(KEY);
		
		if (localProfile && new Date(localProfile.expiration) > new Date()) {
			profile.token = localProfile.token;
			profile.expiration = localProfile.expiration;
		}
	}
}

angular
	.module('testingAngular')
	.factory('browserLocalStorage', browserLocalStorage);

function browserLocalStorage($window) {

	var storage = $window.localStorage;

	return {
		get: get
	};

	function get(key) {

		var value = storage.getItem(key);
		if (value) {
			value = angular.fromJson(value);
		}

		return value;
	}
}