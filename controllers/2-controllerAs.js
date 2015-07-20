angular
	.module('testingAngular.controllers')
	.controller('ControllerAsController', ControllerAsController);

function ControllerAsController () {

	var vm = this;
	
	vm.myValue = null;
	
	vm.sayHello = function () {
		
		return 'Hello!'; 
	};
	
	vm.setMyValue = function (value) {
		
		vm.myValue = value;
	};
}