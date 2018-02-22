angular.module("adminpage", [])
    .controller('adminpagectrl',['$scope','$http', function($scope,$http){
        console.log("yeah");
        $scope.formhide = true;
        $scope.addnewBtn = false;
        $http.get("/show").then(function (response) {
            $scope.productItem=response.data;
            console.log(response.data);
        });
        $http.get("/allCategory").then(function (response) {
            $scope.category = response.data;
            $scope.list = response.data[0].categoryname;
        });


        $scope.pNameChange = function (val) {
            $scope.pName = val;
        };
        $scope.countChange = function (val) {
            $scope.count = val;
        };
        $scope.descrChange = function (val) {
            $scope.descr = val;
        };
        $scope.priceChange = function (val) {
            $scope.price = val;
        };
        $scope.addnew = function () {
            $scope.formhide = false;
            $scope.addnewBtn = true;
        };
        $scope.save = function () {
            $scope.formhide = true;
            $scope.addnewBtn = false;

            var config = {
                headers: {'Content-Type': 'application/json'}
            };
            var name = $scope.pName;
            var price = $scope.price;
            var description = $scope.descr;
            var count = $scope.count;

            var categoryname = $scope.list;
            var category = {categoryname};
            var product ={
                name,
                price,
                description,
                count,
                category

            };
            $http.post('/save', product, config).then(function (response) {
                console.log("succses");
                $scope.productItem=response.data;
            });


        };
        $scope.deleteProduct = function (id) {
            var config = {
                headers: {'Content-Type': 'application/json'}
            };
            $http.post('/deleteProduct', id, config).then(function () {
                console.log("succses");
            });

            function removeByKey(array, params){
                array.some(function(item, index) {
                    return (array[index][params.key] === params.value) ? !!(array.splice(index, 1)) : false;
                });
                return array;
            }
            var removed = removeByKey($scope.productItem, {
                key: 'id',
                value: id
            });
            $scope.productItem = removed;
        };
        $scope.cancel = function () {
            $scope.formhide = true;
            $scope.addnewBtn = false
        };
        $scope.changedCategory = function (val) {
            $scope.list = val;
            console.log($scope.list);

        };
        $scope.products = function () {
            $scope.selected = "allproducts";
        };
        $scope.customers = function () {
            $scope.selected = "allcustomer";
        }




    }]);
