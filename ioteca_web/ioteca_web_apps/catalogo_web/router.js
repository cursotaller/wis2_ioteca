angular.module('app')



//==================================
// ui app routers
//==================================
.config(function($stateProvider) {

    $stateProvider

    //==================================
    // catalogo page template: '<div ui-view ></div>'
    //==================================
        .state('catalogo', {
        url: '/catalogo',
        template: '<div ui-view ></div>'
    })

    //==================================
    // test1 page
    //==================================
    .state("catalogo.categoria", {
        url: "/categoria",
        data: { section: 'Catálogo', page: 'Categoría' },
        templateUrl: "ioteca_web_apps/catalogo_web/views/categoria/index.html"
    });

});
