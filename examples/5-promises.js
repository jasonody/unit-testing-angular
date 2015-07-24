angular
	.module('testingAngular')
	.controller('PromisesController', PromisesController);
							
function PromisesController (weather) {
	
	var vm = this;
	
	vm.update = function () {
		
		vm.weather = '';
		
		weather.getData(vm.zip)
			.then(function (data) {

				vm.weather = data.weather[0].description;
			})
			.catch(function () {

				//log and handle error
				vm.errorMessage = 'Sorry, something went wrong.';
			});
	};
}