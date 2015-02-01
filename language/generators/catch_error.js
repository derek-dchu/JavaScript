function *upper(items) {
  for (var i = 0, len = items.length; i < len; i++) {
    try {
      yield items[i].toUpperCase();
    } catch (e) {
      yield null;
    }
  }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}