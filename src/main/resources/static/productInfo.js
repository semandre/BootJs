angular.module("productInfo", [])
    .controller('productInfoCTRL', function($scope,$http,$window,$location){
        $scope.product= JSON.parse(localStorage.getItem("productInfo"));
        $location.path = "/productInfo/"+$scope.product.id+"";
        localStorage.removeItem("productInfo");
    });