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
			
			bard.inject('weather', '$q', '$rootScope');
			
			deferred = $q.defer();
			spyOn(weather, ['getData']).and.returnValue(deferred.promise);
		});
		
		it('should update weather for zip', function () {
			
			var data = {
				weather: [{ description: "Awesome!" }]
			};
			
			controller.zip = '95814';
			
			controller.update();
			deferred.resolve(data);
			$rootScope.$digest();
			
			expect(controller.weather).toEqual(data.weather[0].description);
			var args = weather.getData.calls.argsFor(0);
			expect(args[0]).toEqual(controller.zip);
		});
		
		it('should update error message if something goes wrong', function () {
			
			controller.update('95814');
			deferred.reject();
			$rootScope.$digest();

			expect(controller.weather).toEqual('');
			expect(controller.errorMessage.toLowerCase()).toContain('sorry');
		});
	});
});