angular
	.module('testingAngular')
	.controller('ScopeController', ScopeController);

function ScopeController ($scope) {
	
	$scope.myValue = null;
	
	$scope.sayHello = function () {
		 
		return "Hello!";
	};
	
	$scope.setMyValue = function (value) {
		
		$scope.myValue = value;
	};
}