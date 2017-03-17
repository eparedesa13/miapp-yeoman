'use strict';

/**
 * @ngdoc service
 * @name miappApp.UserService
 * @description
 * # UserService
 * Service in the miappApp.
 */
angular.module('miappApp')
  .service('UserService', function (Config,$q,$http,$cookies) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    function login(params){
    	console.log(4);
    	var deferred= $q.defer();
    	console.log(Config.BASE + Config.LOGIN);

    	$http.post(Config.BASE + Config.LOGIN, params)
    		.then(function(response){
    			console.log(7);
    			deferred.resolve(response);
    		});

    		console.log(6);

    	return deferred.promise;
    }



    function listado(params){
    	var deferred= $q.defer();
    	var token = $cookies.get('token');
    	var config ={
    		headers:{
    			'Authorization':'JWT ' + token,
    		}
    	}

    	console.log(config);

    	$http.get(Config.BASE + Config.USERS,config)
    		.then(function(response){
    			deferred.resolve(response);
    		});

    	return deferred.promise;
    }

    function agregar(params){
    	console.log(4);
    	var deferred= $q.defer();
    	console.log(Config.BASE + Config.LOGIN);

    	$http.post(Config.BASE + Config.LOGIN, params)
    		.then(function(response){
    			console.log(7);
    			deferred.resolve(response);
    		});

    		console.log(6);

    	return deferred.promise;
    }  

    return{
    	login: login,
    	listado: listado,
    	agregar: agregar,
    }


  });
