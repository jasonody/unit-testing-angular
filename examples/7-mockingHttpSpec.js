describe('mockingHttp', function () {
	
	beforeEach(function () {
		
		bard.appModule('testingAngular');
		bard.inject('weather', '$httpBackend');
	});
	
	afterEach(function () {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	
	describe('getWeatherData', function () {
		
		it('should form the correct url', function () {

			var url = 'http://api.openweathermap.org/data/2.5/weather?zip=95814,us';
			$httpBackend
				.expect('GET', url)
				.respond(200, "weather data");

			weather.getData('95814');

			$httpBackend.flush();
		});
	});
});