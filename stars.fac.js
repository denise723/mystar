(function(){

	"use strict";

	angular
		.module('myStars')
		.factory('starsFactory', function($http){

			var data = {};
			data.getStars = function(){
				return $http.get('data/stars.json');
			}
			return data;
		});

})();