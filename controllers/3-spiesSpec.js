describe('SpiesController', function () {
	
	beforeEach(module('testingAngular.controllers'));
	
	var $controller;
	var user;
	var controller;
	
	beforeEach(inject(function (_$controller_, _user_) {
		
		$controller = _$controller_;
		user = _user_;
		
		controller = _$controller_('SpiesController');
	}));
	
	describe('isStaff', function () {
		
		it('should return true if staff', function () {
			
			spyOn(user, 'getUserType').and.returnValue('Staff');
			
			var result = controller.isStaff();
			
			expect(result).toBeTruthy();
		});
		
		it('should return false if not staff', function () {
			
			spyOn(user, 'getUserType').and.returnValue('Not staff');

			var result = controller.isStaff();

			expect(result).toBeFalsy();
		});
	});
})