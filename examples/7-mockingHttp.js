angular
	.module('testingAngular')
	.factory('mockingHttp', mockingHttp);

function mockingHttp ($http) {
	
	return {
		getWeatherData: getWeatherData
	};
	
	function getWeatherData (zip) {
		
		var url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us';
		return $http.get(url);
	}
}