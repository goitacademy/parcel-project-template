'use strict'

const fs = require('fs');
const path = require('path');
const posthtml = require('posthtml');
const parser = require('posthtml-parser').default;
const {match} = require('posthtml/lib/api');
const expressions = require('posthtml-expressions');

module.exports = (options = {}) => {
  options.root = options.root || './';
  options.encoding = options.encoding || 'utf-8';

  return function posthtmlInclude(tree) {
    tree.parser = tree.parser || parser;
    tree.match = tree.match || match;

    tree.match({tag: 'include'}, node => {
      let src = node.attrs.src || false;
      let content;
      let subtree;
      let source;
      const posthtmlExpressionsOptions = options.posthtmlExpressionsOptions || {locals: false};

      if (options.delimiters) {
        posthtmlExpressionsOptions.delimiters = options.delimiters;
      }

      if (src) {
        src = path.resolve(options.root, src);
        source = fs.readFileSync(src, options.encoding);

        try {
          const localsRaw = node.attrs.locals || (node.content ? node.content.join().replace(/\n/g, '') : false);
          posthtmlExpressionsOptions.locals = JSON.parse(localsRaw);
        } catch {}

        if (posthtmlExpressionsOptions.locals) {
          const result = posthtml()
            .use(expressions(posthtmlExpressionsOptions))
            .process(source, {sync: true});
          source = result.html;
        }

        subtree = tree.parser(source);
        subtree.match = tree.match;
        subtree.parser = tree.parser;
        subtree.messages = tree.messages;
        content = source.includes('include') ? posthtmlInclude(subtree) : subtree;

        if (tree.messages) {
          tree.messages.push({
            type: 'dependency',
            file: src
          });
        }
      }

      return {
        tag: false,
        content
      };
    });

    return tree;
  };
};
