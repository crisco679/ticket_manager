var app = angular.module('ticketManager', []);
app.controller('ticketController', ["$scope","$http", function($scope, $http){
  $scope.ticket={};
  $scope.tickets=[];
  var fetchTickets = function(){
    return $http.get('/tickets').then(function(response){
      console.log(response);
      if(response.status !== 200){
        console.log('Failed to fetch tickets from the API');
      }
      $scope.ticket={};
      $scope.tickets=response.data;
      return response.data;
    })
  };
  $scope.addTicket = function(ticket){
    return $http.post('/store', ticket).then(fetchTickets());
  };
  fetchTickets();
}]);
