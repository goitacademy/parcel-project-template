'use strict'

/**
 * @description Given a "loop" parameter from an "each" tag, parses out the param names and expression to be looped.
 *
 * @method parseLoopStatement
 *
 * @param {String}  input Input
 *
 * @return {Object} {}    Keys && Expression
 */
function parseLoopStatement (input) {
  // Try to find ` in ` keyword
  const inKeywordIndex = input.search(/\sin\s/)

  // If we reach the end of the string without getting "in", it's an error
  if (inKeywordIndex === -1) {
    throw new Error("Loop statement lacking 'in' keyword")
  }

  // Expression is always after `in` keyword
  const expression = input.substr(inKeywordIndex + 4)

  // keys is always before `in` keyword
  const keys = input.substr(0, inKeywordIndex).split(',')

  for (let i = 0; i < keys.length; i++) {
    keys[i] = keys[i].trim()
  }

  return { keys, expression }
}

/**
 * @module loops
 *
 * @type {Function}
 */
module.exports = parseLoopStatement
