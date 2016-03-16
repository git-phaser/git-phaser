angular
  .module('gitphaser')
  .filter('proximityFilter', proximityFilter)
  .filter('timeFilter', timeFilter);
 
function proximityFilter ($rootScope) {
  return function (proximity) {
  	if ($rootScope.DEV || $rootScope.beaconsOFF || !proximity) return proximity;
   
    var distance = proximity.substring(9);
    return "Proximity: " + distance;

  };
};

function timeFilter () {
  return function (time) {
    if (!time) return;
 
    return moment(time).fromNow();
  };
};