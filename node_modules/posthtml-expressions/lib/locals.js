'use strict'

const vm = require('vm')
const matchHelper = require('posthtml-match-helper')
const { render } = require('posthtml-render')
const { match } = require('posthtml/lib/api')

const ctx = vm.createContext({ module })

/**
 * @description Get the script tag with locals attribute from a node list and return locals.
 *
 * @method scriptDataLocals
 *
 * @param  {Array}   tree Nodes
 *
 * @return {Object}   {} Locals
 */
function scriptDataLocals (tree, options) {
  const locals = {}
  const localsAttr = options.localsAttr
  const localsContext = options.locals || {}

  match.call(tree, matchHelper(`script[${localsAttr}]`), node => {
    if (node.content) {
      const code = render(node.content)

      try {
        const parsedContext = vm.createContext({ ...ctx, locals: localsContext })
        const local = vm.runInContext(code, parsedContext)

        Object.assign(locals, local)
      } catch {};
    }

    if (options.removeScriptLocals) {
      return ''
    }

    return node
  })

  return {
    locals
  }
}

module.exports = scriptDataLocals
