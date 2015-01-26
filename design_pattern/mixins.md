'''js
function Person(name) {
	this.name = name;
}

function Dog(name) {
	this.name = name;
}

// mixins
var mover = {
	walk : function() {
		return this.name + " is walking.";
	}
}

var speaker = {
	speak : function() {
		return this.name + " is speaking";
	}
}

// using jQuery
$.extends(Person.prototype, mover, speaker);
$.extends(Dog.prototype, mover);

Person.walk === Dog.walk // true
Dog.speak // Error

// custom extend function
function extend(target) {
	if (!arguments[1]) {
		return;
	}

	for (var i = 0, len = arguments.length; i < len; i++) {
		var source = arguments[i];

		for (var prop in source) {
			if (!target[prop] && source.hasOwnProperty(prop)) {
				target[prop] = source[prop];
			}
		}
	}
}
'''