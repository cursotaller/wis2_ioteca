angular.module('app')



//==================================
// ui app routers
//==================================
.config(function($stateProvider) {

    $stateProvider

    //==================================
    // test1 page
    //==================================
        .state("test1", {
        url: "/test1",
        data: { section: 'UI', page: 'Test 1' },
        templateUrl: "ioteca_web_apps/ui_web/views/test1/form.html"
    });

});
