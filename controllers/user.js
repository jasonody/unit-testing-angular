angular
	.module('testingAngular.controllers')
	.factory('user', user);

function user () {
	
	function getUserType (id) {
		
		//do some stuff to determine user type...
		
		return (new Date().getSeconds() % 2 == 0 ? "Staff" : "Student");
	}
	
	return {
		getUserType: getUserType
	};
}