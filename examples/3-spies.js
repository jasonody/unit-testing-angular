angular
	.module('testingAngular')
	.controller('SpiesController', SpiesController);

function SpiesController (user) {
	
	var vm = this;
	vm.userId = 'chopped_chilies'; //Because they're awesome!
	
	vm.isStaff = function () {
		
		var userType = user.getUserType(vm.userId);
		
		return (userType.toLowerCase() === 'staff');
	}
}

angular
	.module('testingAngular')
	.factory('user', user);

function user () {

	function getUserType (id) {

		//do some stuff to determine user type...

		return (new Date().getSeconds() % 2 === 0 ? "Staff" : "Student");
	}

	return {
		getUserType: getUserType
	};
}