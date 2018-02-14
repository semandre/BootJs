angular.module("productInfo", [])
    .controller('productInfoCTRL', function ($scope, $http) {

        $scope.openInfo = function () {
            var requestUrl = '/productInf';
            $http.get(requestUrl).then(function (response) {
                $scope.nameProd = response.data;
                console.log(response.data.name + "zzzzzzzzzzzzzzzzzz");
            })
        }
    });