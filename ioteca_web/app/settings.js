//==================================
// settings app angular
//==================================
angular.module('app', [
    'ui.router',
    'ngResource',
])




.config(function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    //$httpProvider.interceptors.push('authInterceptorService');
    console.log("push authInterceptorService");
})

.run(function($rootScope, $state, $stateParams, $window) {
    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    /*******************************agregado**************************/
    console.log("run");

    /*
    authService.fillAuthData();
    if (authService.authentication.isAuth === false) {
        $window.location = loginUrl;
    }
    */
    /******************************************************************/

})


.config(function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
});
