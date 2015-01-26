Global module
-------------
```js
var module = (function($) {
	// private
	var __counter = $('*').length; // total number of current DOM elements

	function generateId() {
		return "id_" + __counter++;
	}

	// public
	return {
		generateId: generateId
	}

// dependency injection
}( jQuery ));
```

AMD (Asynchronous module definition)
---
commonly used by script loader.

```js
define("<id>", ["jquery", "path/myOtherModule"], function($, myOtherModule) {
	// private
	var __counter = $('*').length; // total number of current DOM elements

	function generateId() {
		return "id_" + __counter++;
	}

	// public
	return {
		generateId: generateId
	}
})
```
RequireJS example
```js
require(["<id>"], function(myModule) {
	console.log(myModule.generateId);
});
```
