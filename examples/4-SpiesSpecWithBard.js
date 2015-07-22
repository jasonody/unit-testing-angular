describe('SpiesController using Bard', function () {

	var controller;

	beforeEach(function () {

		bard.appModule('testingAngular')
		bard.inject('$controller');

		controller = $controller("SpiesController");
	});

	describe('isStaff', function () {

		beforeEach(function () {

			bard.inject('user');
		});

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
});