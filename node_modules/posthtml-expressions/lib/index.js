'use strict'

const vm = require('vm')
const { parser } = require('posthtml-parser')
const { render } = require('posthtml-render')

const getNextTag = require('./tags')
const parseLoopStatement = require('./loops')
const escapeRegexpString = require('./escape')
const makeLocalsBackup = require('./backup').make
const revertBackupedLocals = require('./backup').revert
const placeholders = require('./placeholders')
const scriptDataLocals = require('./locals')

const delimitersSettings = []
let conditionals, switches, loops, scopes, ignored, delimitersReplace, unescapeDelimitersReplace

/**
 * @description Creates a set of local variables within the loop, and evaluates all nodes within the loop, returning their contents
 *
 * @method executeLoop
 *
 * @param  {Array}  params  Parameters
 * @param  {String} p1      Parameter 1
 * @param  {String} p2      Parameter 2
 * @param  {Object} locals  Locals
 * @param  {String} tree    Tree
 *
 * @return {Function} walk  Walks the tree and parses all locals within the loop
 */
function executeLoop (params, p1, p2, locals, tree) {
  // two loop locals are allowed
  // - for arrays it's the current value and the index
  // - for objects, it's the value and the key
  const scopes = locals

  scopes[params[0]] = p1

  if (params[1]) scopes[params[1]] = p2

  return walk({ locals: scopes }, JSON.parse(tree))
}

/**
 * @description Runs walk function with arbitrary set of local variables
 *
 * @method executeScope
 *
 * @param  {Object} scope  Scoped Locals
 * @param  {Object} locals Locals
 * @param  {Object} node   Node
 *
 * @return {Function} walk Walks the tree and parses all locals in scope
 */
function executeScope (scope, locals, node) {
  scope = Object.assign(locals, scope)

  return walk({ locals: scope }, node.content)
}

/**
 * @description Returns an object containing loop metadata
 *
 * @method getLoopMeta
 *
 * @param {Integer|Object}  index Current iteration
 * @param {Object}          target Object being iterated
 *
 * @return {Object} Object containing loop metadata
 */
function getLoopMeta (index, target) {
  index = Array.isArray(target) ? index : Object.keys(target).indexOf(index)
  const arr = Array.isArray(target) ? target : Object.keys(target)

  return {
    index: index,
    remaining: arr.length - index - 1,
    first: arr.indexOf(arr[index]) === 0,
    last: index + 1 === arr.length,
    length: arr.length
  }
}

/**
 * @author Jeff Escalante Denis (@jescalan),
 *         Denis Malinochkin (mrmlnc),
 *         Michael Ciniawsky (@michael-ciniawsky)
 * @description Expressions Plugin for PostHTML
 * @license MIT
 *
 * @module posthtml-expressions
 * @version 1.0.0
 *
 * @requires vm
 *
 * @requires ./tags
 * @requires ./loops
 * @requires ./escape
 * @requires ./backup
 * @requires ./placeholders
 *
 * @param  {Object} options Options
 *
 * @return {Object} tree PostHTML Tree
 */
module.exports = function postHTMLExpressions (options) {
  // set default options
  options = Object.assign({
    locals: {},
    delimiters: ['{{', '}}'],
    unescapeDelimiters: ['{{{', '}}}'],
    conditionalTags: ['if', 'elseif', 'else'],
    switchTags: ['switch', 'case', 'default'],
    loopTags: ['each'],
    scopeTags: ['scope'],
    ignoredTag: 'raw',
    strictMode: true,
    localsAttr: 'locals',
    removeScriptLocals: false
  }, options)

  // set tags
  loops = options.loopTags
  scopes = options.scopeTags
  conditionals = options.conditionalTags
  switches = options.switchTags
  ignored = options.ignoredTag

  // make a RegExp's to search for placeholders
  let before = escapeRegexpString(options.delimiters[0])
  let after = escapeRegexpString(options.delimiters[1])

  const delimitersRegexp = new RegExp(`(?<!@)${before}(.+?)${after}`, 'g')

  before = escapeRegexpString(options.unescapeDelimiters[0])
  after = escapeRegexpString(options.unescapeDelimiters[1])

  const unescapeDelimitersRegexp = new RegExp(`(?<!@)${before}(.+?)${after}`, 'g')

  // make array of delimiters
  const delimiters = [
    { text: options.delimiters, regexp: delimitersRegexp, escape: true },
    { text: options.unescapeDelimiters, regexp: unescapeDelimitersRegexp, escape: false }
  ]

  // we arrange delimiter search order by length, since it's possible that one
  // delimiter could 'contain' another delimiter, like '{{' and '{{{'. But if
  // you sort by length, the longer one will always match first.
  if (options.delimiters.join().length > options.unescapeDelimiters.join().length) {
    delimitersSettings[0] = delimiters[0]
    delimitersSettings[1] = delimiters[1]
  } else {
    delimitersSettings[0] = delimiters[1]
    delimitersSettings[1] = delimiters[0]
  }

  delimitersReplace = new RegExp(`@${escapeRegexpString(delimitersSettings[1].text[0])}`, 'g')
  unescapeDelimitersReplace = new RegExp(`@${escapeRegexpString(delimitersSettings[0].text[0])}`, 'g')

  // kick off the parsing
  return function (tree) {
    const { locals } = scriptDataLocals(tree, options)

    return normalizeTree(clearRawTag(walk({ locals: { ...options.locals, ...locals }, strictMode: options.strictMode }, tree)), tree.options)
  }
}

function walk (opts, nodes) {
  // the context in which expressions are evaluated
  const ctx = vm.createContext(opts.locals)

  // After a conditional has been resolved, we remove the conditional elements
  // from the tree. This variable determines how many to skip afterwards.
  let skip

  // loop through each node in the tree
  return [].concat(nodes).reduce((m, node, i) => {
    // if we're skipping this node, return immediately
    if (skip) { skip--; return m }

    // don't parse ignoredTag
    if (node.tag === ignored) {
      m.push(node)

      return m
    }

    // if we have a string, match and replace it
    if (typeof node === 'string') {
      node = placeholders(node, ctx, delimitersSettings, opts)
      node = node
        .replace(unescapeDelimitersReplace, delimitersSettings[0].text[0])
        .replace(delimitersReplace, delimitersSettings[1].text[0])

      m.push(node)

      return m
    }

    // if not, we have an object, so we need to run the attributes and contents
    if (node.attrs) {
      for (const key in node.attrs) {
        if (typeof node.attrs[key] === 'string') {
          node.attrs[key] = placeholders(node.attrs[key], ctx, delimitersSettings, opts)
          node.attrs[key] = node.attrs[key]
            .replace(unescapeDelimitersReplace, delimitersSettings[0].text[0])
            .replace(delimitersReplace, delimitersSettings[1].text[0])
        }

        // if key is parametr
        const _key = placeholders(key, ctx, delimitersSettings, opts)
        if (key !== _key) {
          node.attrs[_key] = node.attrs[key]
          delete node.attrs[key]
        }
      }
    }

    // if the node has content, recurse (unless it's a loop, handled later)
    if (node.content && loops.includes(node.tag) === false && node.tag !== scopes[0]) {
      node.content = walk(opts, node.content)
    }

    // if we have an element matching "if", we've got a conditional
    // this comes after the recursion to correctly handle nested loops
    if (node.tag === conditionals[0]) {
      // throw an error if it's missing the "condition" attribute
      if (!(node.attrs && node.attrs.condition)) {
        throw new Error(`the "${conditionals[0]}" tag must have a "condition" attribute`)
      }

      // сalculate the first path of condition expression
      let expressionIndex = 1
      let expression = `if (${node.attrs.condition}) { 0 } `

      const branches = [node.content]

      // move through the nodes and collect all others that are part of the same
      // conditional statement
      let computedNextTag = getNextTag(nodes, ++i)

      let current = computedNextTag[0]
      let nextTag = computedNextTag[1]

      while (conditionals.slice(1).indexOf(nextTag.tag) > -1) {
        let statement = nextTag.tag
        let condition = ''

        // ensure the "else" tag is represented in our little AST as 'else',
        // even if a custom tag was used
        if (nextTag.tag === conditionals[2]) statement = 'else'

        // add the condition if it's an else if
        if (nextTag.tag === conditionals[1]) {
          // throw an error if an "else if" is missing a condition
          if (!(nextTag.attrs && nextTag.attrs.condition)) {
            throw new Error(`the "${conditionals[1]}" tag must have a "condition" attribute`)
          }
          condition = nextTag.attrs.condition

          // while we're here, expand "elseif" to "else if"
          statement = 'else if'
        }
        branches.push(nextTag.content)

        // calculate next part of condition expression
        expression += statement + (condition ? ` (${condition})` : '') + ` { ${expressionIndex++} } `

        computedNextTag = getNextTag(nodes, ++current)

        current = computedNextTag[0]
        nextTag = computedNextTag[1]
      }

      // evaluate the expression, get the winning condition branch
      let branch
      try {
        branch = branches[vm.runInContext(expression, ctx)]
      } catch (error) {
        if (opts.strictMode) {
          throw new SyntaxError(error)
        }
      }

      // remove all of the conditional tags from the tree
      // we subtract 1 from i as it's incremented from the initial if statement
      // in order to get the next node
      skip = current - i

      // recursive evaluate of condition branch
      if (branch) Array.prototype.push.apply(m, walk(opts, branch))

      return m
    }

    // switch tag
    if (node.tag === switches[0]) {
      // throw an error if it's missing the "expression" attribute
      if (!(node.attrs && node.attrs.expression)) {
        throw new Error(`the "${switches[0]}" tag must have a "expression" attribute`)
      }

      // сalculate the first path of condition expression
      let expressionIndex = 0
      let expression = `switch(${node.attrs.expression}) {`

      const branches = []

      for (let i = 0; i < node.content.length; i++) {
        const currentNode = node.content[i]
        if (typeof currentNode === 'string') {
          continue
        }

        if (currentNode.tag === switches[1]) {
          // throw an error if it's missing the "n" attribute
          if (!(currentNode.attrs && currentNode.attrs.n)) {
            throw new Error(`the "${switches[1]}" tag must have a "n" attribute`)
          }
          expression += `case ${currentNode.attrs.n}: {${expressionIndex++}}; break; `
        } else if (currentNode.tag === switches[2]) {
          expression += `default: {${expressionIndex++}}`
        } else {
          throw new Error(`the "${switches[0]}" tag can contain only "${switches[1]}" tags and one "${switches[2]}" tag`)
        }
        branches.push(currentNode)
      }

      expression += '}'

      // evaluate the expression, get the winning switch branch
      const branch = branches[vm.runInContext(expression, ctx)]

      // recursive evaluate of branch
      Array.prototype.push.apply(m, walk(opts, branch.content))

      return m
    }

    // parse loops
    if (loops.includes(node.tag)) {
      // handle syntax error
      if (!(node.attrs && node.attrs.loop)) {
        throw new Error(`the "${node.tag}" tag must have a "loop" attribute`)
      }

      // parse the "loop" param
      const loopParams = parseLoopStatement(node.attrs.loop)
      let target = {}
      try {
        target = vm.runInContext(loopParams.expression, ctx)
      } catch (error) {
        if (opts.strictMode) {
          throw new SyntaxError(error)
        }
      }

      // handle additional syntax errors
      if (typeof target !== 'object' && opts.strictMode) {
        throw new Error('You must provide an array or object to loop through')
      }

      if (loopParams.keys.length < 1 || loopParams.keys[0] === '') {
        throw new Error('You must provide at least one loop argument')
      }

      // converts nodes to a string. These nodes will be changed within the loop
      const treeString = JSON.stringify(node.content)
      const keys = loopParams.keys

      // creates a copy of the keys that will be changed within the loop
      const localsBackup = makeLocalsBackup(keys, opts.locals)

      // run the loop, different types of loops for arrays and objects
      if (Array.isArray(target)) {
        for (let index = 0; index < target.length; index++) {
          opts.locals.loop = getLoopMeta(index, target)
          m.push(executeLoop(keys, target[index], index, opts.locals, treeString))
        }
      } else {
        for (const key in target) {
          opts.locals.loop = getLoopMeta(key, target)
          m.push(executeLoop(keys, target[key], key, opts.locals, treeString))
        }
      }

      // returns the original keys values that was changed within the loop
      opts.locals = revertBackupedLocals(keys, opts.locals, localsBackup)

      // return directly out of the loop, which will skip the "each" tag
      return m
    }

    // parse scopes
    if (node.tag === scopes[0]) {
      // handle syntax error
      if (!node.attrs || !node.attrs.with) {
        throw new Error(`the "${scopes[0]}" tag must have a "with" attribute`)
      }

      const target = vm.runInContext(node.attrs.with, ctx)

      // handle additional syntax errors
      if (typeof target !== 'object' || Array.isArray(target)) {
        throw new Error('You must provide an object to make scope')
      }

      const keys = Object.keys(target)

      // creates a copy of the keys that will be changed within the loop
      const localsBackup = makeLocalsBackup(keys, opts.locals)

      m.push(executeScope(target, opts.locals, node))

      // returns the original keys values that was changed within the loop
      opts.locals = revertBackupedLocals(keys, opts.locals, localsBackup)

      // return directly out of the loop, which will skip the "scope" tag
      return m
    }

    // return the node
    m.push(node)

    return m
  }, [])
}

function clearRawTag (tree) {
  return tree.reduce((m, node) => {
    if (node.content) {
      node.content = clearRawTag(node.content)
    }

    if (node.tag === ignored) {
      node.tag = false
    }

    m.push(node)

    return m
  }, [])
}
function normalizeTree (tree, options) {
  return parser(render(tree), options)
}
