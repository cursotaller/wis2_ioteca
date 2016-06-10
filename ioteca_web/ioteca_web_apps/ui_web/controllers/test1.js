angular.module('app')
    //==================================
    // app class controller
    //==================================
    .controller('Test1Ctrl', function($scope) {
        $scope.precio = 12;
        $scope.cantidad = 2;

        $scope.track = function() {
            console.log('==\nprecio=' + $scope.precio);
            console.log('cantidad=' + $scope.cantidad);
        };
    })

;
