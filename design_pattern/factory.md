define(function() {
	var cars = {
		compact: function(opt) {
			return {
				type: "compact",
				price: opt.price,
				seats: 4
			}
		},
		mini: function(opt) {
			return {
				type: "mini",
				price: opt.price,
				seats: 2
			}
		};

	return {
		create: function(opt) {
			var type = opt.type ? opt.type.toLowerCase() : undefined;

			if (!type || !control[type]) {
				throw new {
					message: type + " is not supported";
				}
			}

			return controls[type](opt);
		}
	}
});