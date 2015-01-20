function argsToArray(args) {
  return Array.prototype.slice.call(args);
}

function curry(fn, scope) {
  var scope = scope || this;
  if (arguments.length < 3) {
    return this;
  }
  var args = Array.prototype.slice.call(arguments, 2);

  return function() {
    fn.apply(scope, args.concat(argsToArray(arguments)));
  }
}

module.exports = curry;