var app = angular.module('computer', ['ngRoute'])

//Defining the routes

.config(['$routeProvider', function($routeProvider){

	$routeProvider.
		when('/main', {
			templateUrl: 'main.html',
			controller: 'MainCtrl'
		}).
		otherwise({
			redirecTo: '/main'
		});

}])
.controller('MainCtrl',['$scope',function($scope){
	$scope.person = 'John Doe';
	console.log($scope);

}]);
