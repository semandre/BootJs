angular.module("modal", [])
    .controller('modalcarts', function($scope,$http){
        $scope.cartbox_show = true;
        $scope.showCategory = true;
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

    // $scope.total_item = function ($index) {
    //       $scope.sum = $scope.cartsArray[$index].price * $scope.cartsArray[$index].quantity;
    //   return $scope.sum;
    // };
    //
    // $scope.total = function () {
    //     $scope.t_price = 0;
    //     for (let i in $scope.cartsArray) {
    //        $scope.t_price += $scope.cartsArray[i].quantity * $scope.cartsArray[i].price;
    //        console.log($scope.t_price);
    //        console.log($scope.cartsArray[i].quantity);
    //        console.log($scope.cartsArray[i].price);
    //
    //     }
    //     return $scope.t_price;
    // }



        $http.get("/allCategory").then(function(response){
            console.log("http");
            console.log(response.data);
            $scope.categoryArray = response.data;
        });
        $scope.opencategory = function (categoryId) {
            console.log("open "+categoryId);
            var requestUrl = '/findByCategory/' + categoryId + '';
            $http.get(requestUrl).then(function (response) {
                console.log(response.data);
                $scope.categoryItemArray = response.data;
            })
        };

        $scope.show_prod = function () {

        };



        $scope.add_but = function (categoryId) {
            console.log(categoryId);
            // console.log(obj.id);
            // var id = obj.id;
            console.log("buy");
            var requestUrl = 'addCart/' + categoryId + '';

            $http.get(requestUrl).then(function (response) {
                $scope.categoryItemArray = response.data;
                console.log($scope.categoryItemArray);
                $scope.cartsArray = JSON.parse(localStorage.getItem("carts"));

                var a = 0;
                var checked = false;

                if ($scope.cartsArray== null || $scope.cartsArray.length == 0) {
                    $scope.cartsArray.push(response.data);
                    // console.log("sas", response)
                }else {

                    for (let i in $scope.cartsArray) {
                        a = a + 1;
                        if (($scope.cartsArray[i].name == $scope.categoryItemArray.name)) {
                            $scope.cartsArray[i].quantity = ($scope.cartsArray[i].quantity + 1);
                            console.log("1log");

                        } else {
                            checked = true;
                            for (let y in carts) {
                                if ($scope.cartsArray[y].name == $scope.categoryItemArray.name) {
                                    checked = false;
                                }
                            }
                            if (a == $scope.cartsArray.length) {
                                if (checked) {
                                    $scope.cartsArray.push(categoryItemArray);
                                    checked = false;
                                }
                            }
                        }
                        if (a == $scope.cartsArray.length) {
                            console.log("i==carts.length");
                        }
                        console.log(a);
                        console.log($scope.cartsArray.length);

                    }
                }
                console.log($scope.cartsArray);
                localStorage.setItem("carts", JSON.stringify($scope.cartsArray));

            });



        };

        $scope.showCategoryButton = function () {
            $scope.showCategory = !$scope.showCategory;
        };
    });