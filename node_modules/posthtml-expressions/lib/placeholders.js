'use strict'

const vm = require('vm')

const htmlRegexp = /[&<>"']/g
const htmlSymbols = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#039;'
}

/**
 * @description Escape HTML characters with their respective entities
 *
 * @method escapeHTML
 *
 * @param  {String} unescaped Unsafe HTML
 *
 * @return {String} escaped   Save HTML
 */
function escapeHTML (unescaped) {
  return unescaped.replace(htmlRegexp, (match) => htmlSymbols[match])
}

/**
 * @description Replace Expressions
 *
 * @method placeholders
 *
 * @param  {String} input Input
 * @param  {Object} ctx Context
 * @param  {Array}  settings Settings
 * @param  {Array}  opts Options
 *
 * @return {String} input Replaced Input
 */
function placeholders (input, ctx, settings, opts) {
  /**
   * Since we are matching multiple sets of delimiters,
   * we need to run a loop here to match each one.
   */
  for (let i = 0; i < settings.length; i++) {
    const matches = input.match(settings[i].regexp)

    if (!matches) continue

    const delimiters = settings[i].text

    for (let j = 0; j < matches.length; j++) {
      const match = matches[j]

      const expression = match.substring(delimiters[0].length, match.length - delimiters[1].length).trim()

      // If expression has non-word characters then use VM
      let value

      if (/\W+/.test(expression)) {
        try {
          value = vm.runInContext(expression, ctx)
        } catch (error) {
          if (opts.strictMode) {
            throw new SyntaxError(error)
          }
        }
      } else if (Object.prototype.hasOwnProperty.call(ctx, expression)) {
        value = ctx[expression]
      }

      // Not found local
      if (value === null || value === undefined) {
        if (opts.missingLocal === undefined) {
          if (opts.strictMode) {
            throw new ReferenceError(`'${expression}' is not defined`)
          }
        } else if (typeof opts.missingLocal === 'string') {
          value = opts.missingLocal.replace('{local}', match)
        }
      }
      // Escape html if necessary
      if (settings[i].escape && typeof value === 'string') {
        value = escapeHTML(value)
      } else if (typeof value === 'object') { // Stringify if value object
        value = JSON.stringify(value)
      }

      // Replace placeholder on evaluated value
      input = input.replace(match, value)
    }
  }

  return input
}

/**
 * @module placeholders
 *
 * @requires vm
 *
 * @type {Function}
 */
module.exports = placeholders
