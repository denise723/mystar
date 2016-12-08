
(function(){
  "use strict";

  angular
    .module('myStars')
    .controller('starsCtrl', function($scope, $http, starsFactory, $mdSidenav){

      starsFactory.getStars().then(function(response){
        $scope.stars = response.data;
      });

      $scope.openSidebar = function(){
        $mdSidenav('left').open();
      }

      $scope.closeSidebar = function(){
        $mdSidenav('left').close();
      }


    $scope.cartStars = [];

    $scope.addCartItem = function(star){
        $scope.cartStars.push({ title : star.title, quantity: 1, id : star.id, price : star.price })
    }

    $scope.total = function(){
        var sum =0;
        $scope.cartStars.forEach(function(star){
        sum += star.price;
      
        });
        
        return sum;

    }
     
     $scope.addTitle = function(){
        var name =[];
        $scope.cartStars.forEach(function(star){
        name += star.title;

      
        });
        
        return name;
      }

      $scope.deleteCartItem = function(){
        $scope.cartStars.splice(this.stars, 1)}
    
    })
})();