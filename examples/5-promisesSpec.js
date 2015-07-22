describe('PromisesController', function () {
	
	var controller;
	
	beforeEach(function () {
		
		bard.appModule('testingAngular');
		bard.inject('$controller');
		
		controller = $controller('PromisesController');
	});
	
	describe('update', function () {
		
		var deferred;
		
		beforeEach(function () {
			
			bard.inject('mockingHttp');
			bard.inject('$q');
			bard.inject('$rootScope');
			
			deferred = $q.defer();
			spyOn(mockingHttp, ['getWeatherData']).and.returnValue(deferred.promise);
		});
		
		it('should update weather for zip', function () {
			
			var data = {
				weather: [{ description: "Awesome!" }]
			};
			
			controller.update('95833');
			deferred.resolve(data);
			$rootScope.$digest();
			
			expect(controller.weather).toEqual(data.weather[0].description);
			//ASSERT ZIP WAS PASSED!
		});
		
		it('should update error message if something goes wrong', function () {
			
			controller.update('95833');
			deferred.reject();
			$rootScope.$digest();

			expect(controller.weather).toEqual('');
			expect(controller.errorMessage.toLowerCase()).toContain('sorry');
		});
	});
});