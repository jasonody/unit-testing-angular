describe('ScopeController', function () {
	
	beforeEach(module('testingAngular.controllers'));
	
	var $controller;
	var $rootScope;
	
	var scope;
	var controller;
	
	beforeEach(inject(function (_$controller_, _$rootScope_) {

		$controller = _$controller_;
		$rootScope = _$rootScope_;

		scope = $rootScope.$new();
		controller = $controller('ScopeController', { '$scope': scope });
	}));

	describe('sayHello', function () {
		
		it('should say hello', function () {

			var result = scope.sayHello();

			expect(result).toEqual('Hello!');
		});
	});
	
	describe('myValue', function () {
		
		it('should initilize to null', function () {
			
			expect(scope.myValue).toEqual(null);
		});
	});
	
	//What happens if we move this above the above test? Will myValue not be null?
	describe('setMyValue', function () { 
		
		it('should set the value', function () {

			var myValue = "My magic value";

			scope.setMyValue(myValue);

			expect(scope.myValue).toEqual(myValue);			
		});
	});
});