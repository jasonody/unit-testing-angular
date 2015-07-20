angular
	.module('testingAngular.controllers')
	.controller('SpiesController', SpiesController);

function SpiesController (user) {
	
	var vm = this;
	vm.userId = 'chopped_chilies'
	
	vm.isStaff = function () {
		
		var userType = user.getUserType(vm.userId);
		
		return (userType.toLowerCase() === 'staff');
	}
}