```js
/**
* provides a global access to one and only one 
* instance of an object.
*/
var Singleton = (function() {
	var __data = 0;
	var instance;

	function getData() {
		return __data;
	}

	function createInstance() {
		return {
			getData: getData;
	}

	return {
		getInstance: function() {
			return instance || (instance = createInstance());
		}
	};
});
```



