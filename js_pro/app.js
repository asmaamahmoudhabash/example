var myApp = angular.module('myApp',[
'ngRoute',
'PersonalController'
]);
myApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.
    when('/item1',{

    templateUrl:'partials/item1.html',
    controller:'ListController'
    }).
    when('/item2',{

        templateUrl:'partials/item2.html',
        controller:'DetailsController'
        }).
   
        otherwise({
        redirectTo: '/item1'
        });
}]);