droneMapApp.directive('hideHeader',['$location',function($location){
    console.log($location.url());
    return{
        restrict: 'A',
        link: function (scope, element, attrs) {
             console.log($location.url());
        }
    }

}]);