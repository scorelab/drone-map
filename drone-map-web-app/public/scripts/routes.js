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
    .when('/signup',{
        templateUrl: 'pages/signup.html',
        controller: 'signupController'
    })
    .when('/forgotpassword',{
        templateUrl: 'pages/forgotpassword.html',
        controller: 'forgotpasswordController'
    })
    .otherwise({redirectTo: '/'});
    
}]);