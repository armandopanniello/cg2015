(function() {
  var larger = function(o1, o2) {
    if ( o1.size > o2.size ) {
        console.log('o1 is larger');
    } else {
        console.log('o2 is larger');
    }
  };

  var x = {size : 20}
  var y = {size : 50}
  console.log(y.constructor);  


  larger(x, y);    
}());