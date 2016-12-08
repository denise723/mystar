angular
    .module('myStars', ['ngMaterial'])
    .config(function($mdThemingProvider){

   	 $mdThemingProvider.theme('default')
   		 .primaryPalette('pink')
   		 .accentPalette('grey');

  })

