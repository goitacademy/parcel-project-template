const path = require("path");
const rimraf = require("rimraf");

module.exports = function(bundler) {
  const outDir = bundler.options.outDir;

  rimraf(path.join(outDir, "{*,.*}"), err => {
    if (err) {
      console.error(`Unable to nuke dir ${outDir}, encountered error: ${err}`);
    }
  });
};
