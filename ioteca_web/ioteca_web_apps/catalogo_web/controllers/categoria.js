angular.module('app')


    .controller("CategoriaCtrl", function($scope, API, $window, $mdDialog) {

    $scope.lista = [];
    $scope.categoria={};

    $scope.list = function() {
        API.Categoria.list({query:$scope.query}).$promise.then(function(r) {
            $scope.lista = r;
        }, function(err) {
            console.log("Err " + err);
        });
    };

    $scope.list();


    //mdDialog
    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.new = function(evt) {
        $scope.categoria.id = null;
        //$scope.categoria = {};
        $mdDialog.show({
            scope: $scope,
            targetEvent: evt,
            templateUrl: 'catalogo/views/categoria/formd.html',
            parent: angular.element(document.body),
            clickOutsideToClose: false,
            preserveScope: true,
        }).then(function() {
            $scope.list();
            
        }, function() {});
    };

    $scope.new2 = function(evt) {
        //$scope.categoria.id = null;
        $mdDialog.show({
            targetEvent: evt,
            scope: $scope,
            templateUrl: 'catalogo/views/categoria/formd2.html',
            preserveScope: true,
            parent: angular.element(document.querySelector('#id')),
            
            clickOutsideToClose: false
        }).then(function() {
            $scope.list();
            //$scope.categoria = {};
        }, function() {});
    };

    //end mdDialog



    $scope.sel = function(d) {
        $scope.categoria = API.Categoria.get({ id: d.id });
        $mdDialog.show({
            scope: $scope,
            templateUrl: 'catalogo/views/categoria/formd.html',
            parent: angular.element(document.body),
            clickOutsideToClose:false,
            preserveScope: true,
        }).then(function(){
            $scope.list();
            //$scope.categoria={};
        }, function(){
        });
    };


    $scope.save = function() {
        if ($scope.categoria.id) {

            API.Categoria.update({ id: $scope.categoria.id }, $scope.categoria).$promise.then(function(r) {
                console.log("r: " + r);
                //$scope.list();
                $mdDialog.hide();
            }, function(err) {
                console.log("Err " + err);
            });

        } else {
            API.Categoria.save($scope.categoria).$promise.then(function(r) {
                console.log("r: " + r);
                //$scope.list();
                $mdDialog.hide();
            }, function(err) {
                console.log("Err " + err);
            });
        }
    };

    $scope.delete = function(d) {
        if ($window.confirm("Seguro?")) {
            API.Categoria.delete({ id: d.id }).$promise.then(function(r) {
                console.log("r: " + r);
                $scope.list();
            }, function(err) {
                console.log("Err " + err);
            });
        }
    };


});
