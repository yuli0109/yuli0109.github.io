(function(){
  angular.module('myPortfolio')
    .controller('AboutController', ["$scope", function ($scope) {
        $scope.select = {
          value: "Option1",
          choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
        };
    }]);
})()

