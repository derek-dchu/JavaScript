var curry = require('./curry');

var toArray = function(a, b, c) {
  console.log([a, b, c]);
}

var toArray10 = curry(toArray, null, 10);
toArray10(20, 30); // [10, 20, 30]