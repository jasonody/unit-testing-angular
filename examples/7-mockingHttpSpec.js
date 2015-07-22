describe('mockingHttp', function () {
	
	beforeEach(function () {
		
		bard.appModule('testingAngular');
		bard.inject('mockingHttp');
		bard.inject('$httpBackend');
	});
	
	afterEach(function () {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	
	describe('getWeatherData', function () {
		
		it('should form the correct url', function () {

			var url = 'http://api.openweathermap.org/data/2.5/weather?zip=95833,us'
			$httpBackend
				.expect('GET', url)
				.respond(200, "weather data");

			mockingHttp.getWeatherData('95833');

			$httpBackend.flush();
		});
	});
});