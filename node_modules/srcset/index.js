'use strict';

const integerRegex = /^-?\d+$/;

function deepUnique(array) {
	return array.sort().filter((element, index) => {
		return JSON.stringify(element) !== JSON.stringify(array[index - 1]);
	});
}

exports.parse = string => {
	return deepUnique(
		string.split(/,\s+/).map(part => {
			const result = {};

			part
				.trim()
				.split(/\s+/)
				.forEach((element, index) => {
					if (index === 0) {
						result.url = element;
						return;
					}

					const value = element.slice(0, -1);
					const postfix = element[element.length - 1];
					const integerValue = Number.parseInt(value, 10);
					const floatValue = Number.parseFloat(value);

					if (postfix === 'w' && integerRegex.test(value)) {
						if (integerValue <= 0) {
							throw new Error('Width descriptor must be greater than zero');
						}

						result.width = integerValue;
					} else if (postfix === 'x' && !Number.isNaN(floatValue)) {
						if (floatValue <= 0) {
							throw new Error('Pixel density descriptor must be greater than zero');
						}

						result.density = floatValue;
					} else {
						throw new Error(`Invalid srcset descriptor: ${element}`);
					}

					if (result.width && result.density) {
						throw new Error('Image candidate string cannot have both width descriptor and pixel density descriptor');
					}
				});

			return result;
		})
	);
};

exports.stringify = array => {
	return [...new Set(
		array.map(element => {
			if (!element.url) {
				throw new Error('URL is required');
			}

			const result = [element.url];

			if (element.width) {
				result.push(`${element.width}w`);
			}

			if (element.density) {
				result.push(`${element.density}x`);
			}

			return result.join(' ');
		})
	)].join(', ');
};
