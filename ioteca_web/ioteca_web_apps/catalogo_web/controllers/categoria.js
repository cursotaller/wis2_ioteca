angular.module('app')


.controller("CategoriaCtrl", function($scope, API, $window) {

    $scope.lista = [];
    $scope.categoria = {};

    $scope.list = function() {
        API.Categoria.list({ query: $scope.query }).$promise.then(function(r) {
            $scope.lista = r;
        }, function(err) {
            console.log("Error in catalogo_web.CategoriaCtrl.list():" + JSON.stringify(err));

        });
    };

    $scope.list();


    $scope.new = function(evt) {
        $scope.categoria = {};

    };

    $scope.sel = function(d) {
        $scope.categoria = API.Categoria.get({ id: d.id });

    };

    $scope.save = function() {
        if ($scope.categoria.id) {

            API.Categoria.update({ id: $scope.categoria.id }, $scope.categoria).$promise.then(function(r) {
                console.log("r: " + r);
                $scope.list();
            }, function(err) {
                console.log("Error in catalogo_web.CategoriaCtrl.list():" + JSON.stringify(err));
            });

        } else {
            API.Categoria.save($scope.categoria).$promise.then(function(r) {
                console.log("r: " + r);
                $scope.list();
            }, function(err) {
                console.log("Error in catalogo_web.CategoriaCtrl.list():" + JSON.stringify(err));
            });
        }
    };

    $scope.delete = function(d) {
        if ($window.confirm("Seguro?")) {
            API.Categoria.delete({ id: d.id }).$promise.then(function(r) {
                console.log("r: " + r);
                $scope.list();
            }, function(err) {
                console.log("Error in catalogo_web.CategoriaCtrl.list():" + JSON.stringify(err));
            });
        }
    };


});
