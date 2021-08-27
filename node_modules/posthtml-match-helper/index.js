function expandMatcher (matcher) {

	if (typeof matcher === "string") {

		var match = matcher.match(/^([^#\.\[]+)?(?:#([^\.\[]+))?(?:\.([^#\[]+))?((?:\[[^\]]+\])+)?$/);

		if (match) {
			matcher = {};
			var tag = match[1];
			var id = match[2];
			var className = match[3];
			var attrs = match[4];

			if (tag) {
				matcher.tag = tag;
			}

			if (id || className || attrs) {
				matcher.attrs = {};

				if (id) {
					matcher.attrs.id = id;
				}

				if (className) {
					matcher.attrs.class = new RegExp(getCombinations(className.split(".")).map(function(order){
						return "(?:^|\\s)" + order.join("\\s(?:.*?\\s)?") + "(?:\\s|$)";
					}).join("|"));
				}

				if (attrs) {
					attrs = attrs.slice(1, -1).split("][");
					var l = attrs.length;
					var attrsMatch, name, operator, value;

					while (l--) {
						attrsMatch = attrs[l].match(/^([a-zA-Z0-9_-]*[^~|^$*!=])(?:([~|^$*!]?)=['"]?([^'"]*)['"]?)?$/);

						if (attrsMatch) {
							name = attrsMatch[1];
							operator = attrsMatch[2];
							value = attrsMatch[3];

							if (value) {

								switch (operator) {

									case "~":
										matcher.attrs[name] = new RegExp("(?:^|\\s)" + value + "(?:\\s|$)");
										break;

									case "|":
										matcher.attrs[name] = new RegExp("^" + value + "(?:-|$)");
										break;

									case "^":
										matcher.attrs[name] = new RegExp("^" + value);
										break;

									case "$":
										matcher.attrs[name] = new RegExp(value + "$");
										break;

									case "*":
										matcher.attrs[name] = new RegExp(value);
										break;

									case "!":
										matcher.attrs[name] = new RegExp("^((?!" + value + ")[\\s\\S])*$");
										break;
	
									default:
										matcher.attrs[name] = new RegExp("^" + value + "$");
										break;

								}

							}
							else {
								matcher.attrs[name] = true;
							}
						}
					}
				}
			}
		}
		else {
			matcher = {tag: matcher};
		}
	}

	return matcher;
}

function getCombinations (values, subresult) {
	subresult = subresult || [];

	var result = [];

	values.forEach(function (value, index) {
		if (subresult.indexOf(value) < 0) {
			var _subresult = subresult.concat([value]);
			if (_subresult.length < values.length) {
				result = result.concat(getCombinations(values, _subresult));
			}
			else {
				result.push(_subresult);
			}
		}
	});

	return result;
}

module.exports = function (matcher) {

	if (typeof matcher === "string") {
		
		if (matcher.match(/\s*,\s*/)) {
			matcher = matcher.split(/\s*,\s*/);
		}
		else {
			return expandMatcher(matcher);
		}

	}

	if (Array.isArray(matcher)) {
		return matcher.map(expandMatcher);
	}

	return matcher;
};
