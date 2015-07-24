angular
	.module('testingAngular')
	.factory('weather', weather);

function weather ($http) {
	
	return {
		getData: getData
	};
	
	function getData (zip) {
		
		var url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us';
		
		return $http.get(url);
	}
}