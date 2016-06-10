angular.module('app')



//==================================
// main app routers
//==================================
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/404");

    $stateProvider


    //==================================
    // Error 404 Page not found template: '<div ui-view ></div>'
    //==================================
        .state('err404', {
        url: '/404',
        template: 'Error 404 Page not found'
    });
    /*
    $stateProvider

    //==================================
    // App layout base
    //==================================
        .state('app', {
        url: '/app',
        views: {
            '': {
                templateUrl: 'app/views/layout.html'
            },
            'aside': {
                templateUrl: 'app/views/aside.html'
            },
            'content': {
                templateUrl: 'app/views/content.html'
            }
        }
    })


    //==================================
    // dashboard page
    //==================================
    .state("app.dashboard", {
        url: "/dashboard",
        data: { page: 'Dashboard page' },
        views: {
            '': {
                templateUrl: "app/views/pages/dashboard.wall.html"
            },
        }
    })
    */




});
