(function() {
  'use strict';

  angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope) {
    $scope.list = "rice, chicken, soda, salad, coffee";

    $scope.checkITM = function (){
      var array = $scope.list.split(',');

      if(array.length <= 3)
      {
        $scope.message = "Enjoy!";
      }
      else
      {
        $scope.message = "Too Much!";
      }
    }
  }
}());
