'use strict'

/**
 * @description Replace String based on RegExp
 *
 * @method escapeRegexpString
 *
 * @param  {String}   input Input
 *
 * @return {Function} input Replaced Input
 */
function escapeRegexpString (input) {
  // match Operators
  const match = /[|\\{}()[\]^$+*?.]/g

  return input.replace(match, '\\$&')
}

/**
 * @module escape
 *
 * @type {Function}
 */
module.exports = escapeRegexpString
