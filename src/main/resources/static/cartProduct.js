// $(document).ready(function () {
//     $.ajax({
//         url: 'cart',
//         type: 'GET',
//         success: function (data) {
//             console.log(data);
//             for (let obj of data){
//                 let $p = $('<p/>',{
//                     text: "id: "+obj.id + " name: " + obj.name + " price: " + obj.price + " quantity " + obj.quantity
//                 });
//                 console.log($p);
//                 let $br = ("<input type='button' ng-model='btnInput' onclick='remove(this)' value='remove' id='" + obj.id + " '>");
//                 let $bp = ("<input type='button' onclick='increment(this)' value='+' id='" + obj.id + " '>");
//                 let $bm = ("<input type='button' onclick='decrement(this)' value='-' id='" + obj.id + " '>");
//
//                 $('#cartsProduct').append($p).append($br).append($bp).append($bm);
//             }
//         },
//         error:function () {
//             window.alert("cartsEROR");
//         }
//     })
// });
//
// function remove() {
//
// }


angular.module("myApp", [])
    .controller("first", function ($scope) {
        $scope.name = "lol";
    });


angular.module("myApp", [])
    .controller("carts", function ($scope, $http) {
        // $http.get("cart").then(function (response) {
        //     console.log(response.data);
        //     $scope.cartsArray = response.data;
        // });
        var storedNames = JSON.parse(localStorage.getItem("carts"));
        console.log(storedNames);
        $scope.cartsArray = storedNames;


        $scope.removeOne = function ($index) {
            console.log("delete" + $index);
            // $scope.cartsArray.delete(id);
            $scope.cartsArray.splice($index, 1);

        }
        $scope.increment = function ($index) {
            console.log("increment" + $index);
            var a = $scope.cartsArray[$index].quantity;
            $scope.cartsArray[$index].quantity = a + 1;
        }
        $scope.decrement = function ($index) {
            console.log("decrement" + $index);
            var a = $scope.cartsArray[$index].quantity;
            if (a > 1) {
                $scope.cartsArray[$index].quantity = a - 1;
            }

        }

        $scope.buy = function () {
            var config = {
                headers: {'Content-Type': 'application/json'}
            };

            $http.post('addCarts', $scope.cartsArray, config).then(function () {
                console.log("succses");
            });


        }


        // $scope.btnInput;

    });



