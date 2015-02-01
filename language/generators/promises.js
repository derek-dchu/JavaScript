function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run (generator) {
  // your code goes here
  var it = generator();

  function go(result) {
    if (result.done) {
      return result.value;
    }

    return result.value.then(function (value) {
      return go(it.next(value));
    }, function(error) {
      return go(it.throw(value));
    });
  }

  go(it.next());
}

run(function* () {
  // improve: errors?
  var foo = yield askFoo();
  console.log(foo);
});