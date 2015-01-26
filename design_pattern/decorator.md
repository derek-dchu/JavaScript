Decorator allows add extra functionalities to an object without effect the interfaces of the object.

```js
function Beverage(cost) {
	this.__cost = cost;
}

// default price
Beverage.prototype.cost = function() {
	return this.__cost;
}

// decorators
Beverage.small = function(beverage) {
	var cost = beverage.cost();

	beverage.cost = function() {
    	return cost - 1;
  	}
}

Beverage.large = function(beverage) {
 	var cost = beverage.cost();

	beverage.cost = function() {
		return cost + 1;
	}
}

var coffee = new Beverage(5);
console.log(coffee.cost());
Beverage.small(coffee)
console.log(coffee.cost());
```

Better approach
```js
function Beverage(cost) {
	this.__cost = cost;
}

// default price
Beverage.prototype.cost = function() {
	return this.__cost;
}

// decorators
function BeverageDecorators(beverage) {
	Beverage.call(this);
	this.beverage = beverage;
}

BeverageDecorators.prototype.small = function() {
	this.beverage.__cost -= 1;
	return this;
}

BeverageDecorators.prototype.cream = function() {
	this.beverage.__cost += 0.5;
	return this;
}

function Coffee() {
	Beverage.call(this, 5);
}

Coffee.prototype = Object.create(Beverage.prototype);

var coffee = new Coffee;
new BeverageDecorators(coffee).small().cream();
console.log(coffee.cost());
```


