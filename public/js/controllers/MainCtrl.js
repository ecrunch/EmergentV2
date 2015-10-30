// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope) {


    $scope.tagline = 'To the moon and back!';   
        
    $scope.items = [{name:"Tacos", type:"red", test:3, masonryCardType:"item item--W2"},
		{name:"Tacos", type:"red", test:2, masonryCardType:"item item--W2"},
		{name:"Burrito", type:"blue", test:3, masonryCardType:"item item--H2"},
		{name:"Tacos", type:"red", test:8, masonryCardType:"item item--H2"},
		{name:"Tamales", type:"green", test:2, masonryCardType:"item item--W2H2"},
		{name:"Tamales", type:"red", test:8, masonryCardType:"item item--W2H2"},
		{name:"Tacos", type:"blue", test:3, masonryCardType:"item item--W2"},
		{name:"Tacos", type:"red", test:2, masonryCardType:"item item--W2"},
                {name:"Burrito", type:"blue", test:3, masonryCardType:"item item--banner-large"},
                {name:"Tacos", type:"red", test:8, masonryCardType:"item "},
                {name:"Tamales", type:"green", test:2, masonryCardType:"item "},
                {name:"Tamales", type:"red", test:8, masonryCardType:"item item--W2"},
                {name:"Tacos", type:"blue", test:3, masonryCardType:"item item--banner"},
		{name:"Tacos", type:"red", test:2, masonryCardType:"item "},
                {name:"Burrito", type:"blue", test:3, masonryCardType:"item "},
                {name:"Tacos", type:"red", test:8, masonryCardType:"item "},
                {name:"Tamales", type:"green", test:2, masonryCardType:"item "},
                {name:"Tamales", type:"red", test:8, masonryCardType:"item "},
                {name:"Tacos", type:"blue", test:3, masonryCardType:"item "},
		];
		


});
