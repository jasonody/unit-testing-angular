describe('SpiesController', function () {
	
	beforeEach(module('testingAngular'));
	
	var $controller;
	var controller;
	
	beforeEach(inject(function (_$controller_) {
		
		$controller = _$controller_;
		
		controller = $controller('SpiesController');
	}));
	
	describe('isStaff', function () {
		
		var user;
		
		beforeEach(inject(function (_user_) {
			
			user = _user_;
		}));
		
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