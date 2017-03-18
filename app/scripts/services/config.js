'use strict';

/**
 * @ngdoc service
 * @name miappApp.Config
 * @description
 * # Config
 * Constant in the miappApp.
 */
angular.module('miappApp')
  .constant('Config', {
  	/*BASE: 'http://192.168.1.35:3036/',*/
  	BASE: 'http://localhost:3333/',
  	USERS: 'users/',
  	LOGIN: 'users/login',
  	ORGANIZATIONS: 'organizations/'
  });
