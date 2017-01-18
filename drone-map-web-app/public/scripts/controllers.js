'use strict';

droneMapApp.controller('mainController', ['$scope', 'headerFooterService', function($scope, headerFooterService) {
    console.log('mainController');
    $scope.headerAndFooter = headerFooterService;
    console.log($scope.headerAndFooter.headerAndFooter());
}]);

droneMapApp.controller('homeController', ['$scope', 'headerFooterService', function($scope, headerFooterService) {
    console.log('homeController');
    headerFooterService.setHeaderAndFooter(true);
    console.log($scope.headerAndFooter.headerAndFooter());

}]);

droneMapApp.controller('signinController', ['$scope', 'headerFooterService', '$firebaseAuth', function($scope, headerFooterService, $firebaseAuth) {
    console.log('signinController');
    headerFooterService.setHeaderAndFooter(false);
    console.log($scope.headerAndFooter.headerAndFooter());
}]);
