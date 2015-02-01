function *factorial(n) {
  var i = 1;
  while (n) {
    yield i;
    i *= n--;
  }
}

for (var n of factorial(5)) {
  console.log(n)
}