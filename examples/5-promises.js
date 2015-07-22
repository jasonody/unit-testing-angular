angular
	.module('testingAngular')
	.controller('PromisesController', PromisesController);
							
function PromisesController (mockingHttp) {
	
	var vm = this;
	
	vm.update = function () {
		
		vm.weather = '';
		
		mockingHttp.getWeatherData(vm.zip)
			.then(function (data) {

				vm.weather = data.weather[0].description;
			})
			.catch(function () {

				//log and handle error
				vm.errorMessage = 'Sorry, something went wrong.';
			});
	};
}