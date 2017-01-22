droneMapApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    
    .when('/',{
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/signin',{
        templateUrl: 'pages/signin.html',
        controller: 'signinController'
    })
    .otherwise({redirectTo: '/'});
    
}]);