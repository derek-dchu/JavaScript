Creation
--------
```js
var obj = {};

// Four ways to define a property
// 1
obj.var1 = 1;
// 2
obj["var 2"] = 2;
// 3 (define with a descriptor which can also define associated attributes of the property)
Object.defineProperty(obj, "var3", {
	value: "3",

	configurable: false, // true: the descriptor may be changed (but writable can be changed to false) and if the property may be deleted
	note: no error for delete
	enumerable: false, // true: enumeration of the object with show this property
	writable: false, // true: property may be changed with an assignment operator
	// note: an error is thrown is strict mode when we try to assign an new value.

	get: undefined // getter function which the return will be used as the value
	// note: we cannot have both value and get
	set: undefined // setter function serves as the assignment operator
});
// 4
Object.defineProperties(obj, {
	var4 : {
		value: 4;
	},
	var5 : {
		value: "5";
	}
});
```
Constructor
```js
function Stock(ticker) {
	this.ticker = ticker;

	this.showTicker = function() {
		console.log(this.ticker);
	}
}

var GOOG = new Stock("GOOG");
var IBM = new Stock("IBM");

GOOG.showTicker === IBM.showTicker // false

Stock.prototype.getTicker = function() {
	return this.ticker;
}

GOOG.getTicker === IBM.getTicker // true
```