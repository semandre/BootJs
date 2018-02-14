angular.module("myApp", [])
    .controller("first", function ($scope, $http) {
        $scope.bool = true;
    });


angular.module("myApp", [])
    .controller("carts", function ($scope, $http) {
        $scope.cartsArray = JSON.parse(localStorage.getItem("carts"));
        $scope.but_show = false;

        if ($scope.cartsArray.length == 0) {
            $scope.but_show = true;
        }


        $scope.removeOne = function ($index) {
            console.log("delete" + $index);
            $scope.cartsArray.splice($index, 1);

            localStorage.setItem("carts", JSON.stringify($scope.cartsArray));
            if ($scope.cartsArray.length == 0) {
                $scope.but_show = true;
            }


        };
        $scope.increment = function ($index) {
            console.log("increment" + $index);
            var a = $scope.cartsArray[$index].quantity;
            $scope.cartsArray[$index].quantity = a + 1;
            localStorage.setItem("carts", JSON.stringify($scope.cartsArray));
        };
        $scope.decrement = function ($index) {
            console.log("decrement" + $index);
            var a = $scope.cartsArray[$index].quantity;
            if (a > 1) {
                $scope.cartsArray[$index].quantity = a - 1;
                localStorage.setItem("carts", JSON.stringify($scope.cartsArray));
            }

        };


        $scope.buy = function () {

            // var config = {
            //     headers: {'Content-Type': 'application/json'}
            // };
            //
            // $http.post('addCarts', $scope.cartsArray, config).then(function () {
            //     console.log("succses");
            // });

            console.log("buy log");

        };

    });





