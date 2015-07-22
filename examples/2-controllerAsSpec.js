describe('ControllerAsController', function () {
	
	beforeEach(module('testingAngular'));
	
	var $controller;
	
	var controller;
	
	beforeEach(inject(function (_$controller_) {
		
		$controller = _$controller_;
		
		controller = $controller('ControllerAsController');
	}));
	
	describe('sayHello', function () {
		
		it('should say hello', function () {

			var result = controller.sayHello();

			expect(result).toEqual('Hello!');
		});
	});
	
	describe('myValue', function () {

		it('should initilize to null', function () {

			expect(controller.myValue).toEqual(null);
		});
	});

	//What happens if we move this above the above test? Will myValue not be null?
	describe('setMyValue', function () { 

		it('should set the value', function () {

			var myValue = "My magic value";

			controller.setMyValue(myValue);

			expect(controller.myValue).toEqual(myValue);			
		});
	});
});