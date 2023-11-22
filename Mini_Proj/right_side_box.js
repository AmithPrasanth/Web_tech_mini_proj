
var calApp;
calApp = angular.module('calApp', ['ngAnimate'])
calApp.controller('calCtrl',  function($scope, $sce) {
  
  $scope.eventsVisible = 3; // How many events should be shown?
  
  $scope.events = [
    {
      title    : "Australia Day Service",
      date     : 1453786245352,
      location : "Corner Cross and Hocking St West Footscray",
    },
    {
      title    : "BBQ in the park",
      date     : 1456813856559,
      location : "16 Ferdinando Gardens Hampton",
    },
    {
      title    : "Good Friday",
      date     : 1459290634807,
      location : "Flinders St, Melbourne",
    },
    {
      title    : "Family Day",
      date     : 1459290634807,
      location : "Collins St, Melbourne",
    },
    {
      title    : "Concert In Altona",
      date     : 1461990642447,
      location : "Altona Beach",
    }
  ];
  
  $scope.getMap = function(event){
    // Creates a Google Map URL
    return "https://maps.google.com/?q=" + event.location;
  };
    
 $scope.getEvents = function(){
  // Gets x number of events , using scope.eventsVisible 
  // to determine how many events to show
   var events = [];
   for(x = 0; x<$scope.eventsVisible; x++){
     events.push($scope.events[x]);
   }
   return events;
 } 
 
 $scope.hiddenEvents = function(){
   // Calculates how many events are hidden
   var remaining;
   if($scope.events.length - $scope.eventsVisible > 0){
     remaining = $scope.events.length - $scope.eventsVisible;
   } else{
     remaining = 0;
   }
   
   return remaining;
 }
 
 $scope.showHidden = function(){
   // Show hidden events
   $scope.eventsVisible = $scope.events.length;
 }
 $scope.hideEvents = function(){
   // Hide events
   $scope.eventsVisible = 3;
 } 
 
  
});


