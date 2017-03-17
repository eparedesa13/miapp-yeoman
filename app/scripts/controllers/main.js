'use strict';

/**
 * @ngdoc function
 * @name miappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the miappApp
 */
angular.module('miappApp')
  .controller('MainCtrl', function ($scope,UserService,$cookies) {

  	$scope.onSubmit = function(){
  		console.log(1);
  		if ($scope.loginForm.$valid){
  			console.log(2);
  			//envia data
  			console.log($scope.usuario);
  			UserService.login($scope.usuario)
	  			.then(function(response){
	  				console.log(3);
	  				console.log(response);
	  				$cookies.put('token',response.data.token);

	  				var token = $cookies.get('token');
	  				console.log(token);
	  			});
  		}
  	}
 
  });
