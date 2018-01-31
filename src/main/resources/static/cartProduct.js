
angular.module("myApp", [])
    .controller("first", function ($scope) {
        $scope.name = "lol";
    });


angular.module("myApp", [])
    .controller("carts", function ($scope, $http) {
        var storedNames = JSON.parse(localStorage.getItem("carts"));
        console.log(storedNames);
        $scope.cartsArray = storedNames;


        $scope.removeOne = function ($index) {
            console.log("delete" + $index);
            // $scope.cartsArray.delete(id);
            $scope.cartsArray.splice($index, 1);
            localStorage.setItem("carts",JSON.stringify($scope.cartsArray));

        };
        $scope.increment = function ($index) {
            console.log("increment" + $index);
            var a = $scope.cartsArray[$index].quantity;
            $scope.cartsArray[$index].quantity = a + 1;
            localStorage.setItem("carts",JSON.stringify($scope.cartsArray));
        };
        $scope.decrement = function ($index) {
            console.log("decrement" + $index);
            var a = $scope.cartsArray[$index].quantity;
            if (a > 1) {
                $scope.cartsArray[$index].quantity = a - 1;
                localStorage.setItem("carts",JSON.stringify($scope.cartsArray));
            }

        };

        $scope.buy = function () {
            var config = {
                headers: {'Content-Type': 'application/json'}
            };

            $http.post('addCarts', $scope.cartsArray, config).then(function () {
                console.log("succses");
            });
        }
    });



