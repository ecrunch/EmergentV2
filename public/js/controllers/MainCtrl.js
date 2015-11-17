// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope) {


    $scope.tagline = 'To the moon and back!';   
        
    $scope.items

    /*Filter part of code*/
    $scope.header = "true";

    $scope.toggleHeader = function(){
    	if ($scope.header == "true"){
    		$scope.header = "false";
    	} else {
    		$scope.header = "true";
    	}
    }


});
