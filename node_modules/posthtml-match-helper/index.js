var selectorReg = /^([^#\.\[]+)?(?:#([^\.\[]+))?(?:\.([^#\[]+))?((?:\[[^\]]*\])+)?$/;
var attributeReg = /^([a-zA-Z0-9_-]*[^~|^$*!=])(?:([~|^$*!]?)=['"]?([^'"]*)['"]?)?$/;
var splitReg = /\s*,\s*/;

function expandMatcher (matcher) {

	if (typeof matcher === "string") {

		var match = matcher.match(selectorReg);

		if (match) {
			matcher = {};
			var tag = match[1];
			var id = match[2];
			var className = match[3];
			var attrs = match[4];
			var attributes;

			if (tag) {
				matcher.tag = tag;
			}

			if (attrs) {
				attributes = expandAttributes(attrs);
			}
			else if (id || className) {
				attributes = {};
			}

			if (id) {
				attributes.id = id;
			}

			if (className) {
				attributes.class = new RegExp(getCombinations(className.split(".")).map(function(order){
					return "(?:^|\\s)" + order.join("\\s(?:.*?\\s)?") + "(?:\\s|$)";
				}).join("|"));
			}

			if (attributes) {
				matcher.attrs = attributes;
			}
		}
		else {
			matcher = {tag: matcher};
		}
	}

	return matcher;
}

function cssAttrToRegExp (value, operator) {
	var reg;

	switch (operator) {

		case "~":
			reg = "(?:^|\\s)" + value + "(?:\\s|$)";
			break;

		case "|":
			reg = "^" + value + "(?:-|$)";
			break;

		case "^":
			reg = "^" + value;
			break;

		case "$":
			reg = value + "$";
			break;

		case "*":
			reg = value;
			break;

		case "!":
			reg = "^((?!" + value + ")[\\s\\S])*$";
			break;

		default:
			reg = "^" + value + "$";
			break;

	}

	return new RegExp(reg);
}

function expandAttributes (attrs) {
	attrs = attrs.slice(1, -1);
	if (attrs.length > 0) {
		attrs = attrs.split("][");
		var attrObject = {};
		var l = attrs.length;
		var attrMatch, name, operator, value;

		while (l--) {
			attrMatch = attrs[l].match(attributeReg);

			if (attrMatch) {
				name = attrMatch[1];
				operator = attrMatch[2];
				value = attrMatch[3];

				attrObject[name] = (value) ? cssAttrToRegExp(value, operator) : true;
			}
		}

		return attrObject;
	}
}

function getCombinations (values, subresult) {
	subresult = subresult || [];

	var result = [];

	values.forEach(function (value) {
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

		if (matcher.match(splitReg)) {
			matcher = matcher.split(splitReg);
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
