angular.module("modal", [])
    .controller('modalcarts', function($scope){
        $scope.cartbox_show = true;
        $scope.open = function () {
            $scope.cartbox_show = false;
            $scope.cartsArray = JSON.parse(localStorage.getItem("carts"));
        };
        $scope.close = function () {
            $scope.cartbox_show = true;
        };

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

    });



// .controller("carts", function ($scope, $http) {



//     $scope.buy = function () {
//
//         // var config = {
//         //     headers: {'Content-Type': 'application/json'}
//         // };
//         //
//         // $http.post('addCarts', $scope.cartsArray, config).then(function () {
//         //     console.log("succses");
//         // });
//
//         console.log("buy log");
//
//     };
//
// });