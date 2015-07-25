describe('userProfile', function () {
	
	beforeEach(function () {
		
		bard.appModule('testingAngular');
		//bard.inject('userProfile'); //Notice that we are not injecting it here
	});
	
	describe('initialize', function () {
		
		beforeEach(function () {
			
			bard.inject('browserLocalStorage');
		});
		
		it('should load active profile from local storage', function () {
			
			var localProfile = {
				token: 'token',
				expiration: new Date().setHours(new Date().getHours() + 2)
			};
			spyOn(browserLocalStorage, 'get').and.returnValue(localProfile);

			bard.inject('userProfile'); //Notice that we inject here and not before

			expect(userProfile.profile.token).toEqual(localProfile.token);
			expect(userProfile.profile.expiration).toEqual(localProfile.expiration);
		});
		
		it('should use default profile when local storage is empty', function () {
			
			spyOn(browserLocalStorage, 'get').and.returnValue(undefined);

			bard.inject('userProfile');
			
			expect(userProfile.profile.token).toEqual('');
			expect(userProfile.profile.expiration).toEqual(new Date());
		});
		
		it('should use default profile when token has expired', function () {			

			var localProfile = {
				token: 'token',
				expiration: new Date().setHours(new Date().getHours() - 2)
			};
			spyOn(browserLocalStorage, 'get').and.returnValue(localProfile);

			bard.inject('userProfile');

			expect(userProfile.profile.token).toEqual('');
			expect(userProfile.profile.expiration).toEqual(new Date());
		});
	});
});