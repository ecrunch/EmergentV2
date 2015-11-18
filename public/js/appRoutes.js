// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/resume', {
            templateUrl: 'views/resume.html',
        })

        .when('/blog', {
            templateUrl: 'views/blog.html',
        })

        .when('/projects', {
            templateUrl: 'views/projects.html',
        })

        .when('/inspiration', {
            templateUrl: 'views/inspiration.html',
        });

    $locationProvider.html5Mode(true);

}]);
