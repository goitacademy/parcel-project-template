const path = require('path');

const { Reporter } = require('@parcel/plugin');

const utils = require('./utils');
const getFilesToRemove = require('./getFilesToRemove');
const removeFiles = require('./removeFiles');
const opsLimiter = require('./opsLimiter')();

const normalizePath = p => p.split(path.sep).join(path.posix.sep);

const removeFileReporter = new Reporter({
  async report({ event, options }) {
    if (event.type === 'buildSuccess') {
      const bundles = event.bundleGraph.getBundles();
      const distPaths = [];
      const filesToExclude = [];

      bundles.forEach(b => { // excluding files of the current build from removal
        const distPath = b.target && b.target.distDir ? normalizePath(b.target.distDir) : null;

        if (utils.isString(distPath) && !distPaths.includes(distPath)) {
          distPaths.push(distPath);
        }

        const filePath = normalizePath(b.filePath);

        if (!filesToExclude.includes(filePath)) {
          filesToExclude.push(filePath);
          // excluding .map files as well
          if (['.js', '.css'].includes(path.extname(filePath))) {
            filesToExclude.push(`${filePath}.map`);
          }
        }
      });

      const projectPath = normalizePath(options.projectRoot);
      const filesToRemove = await getFilesToRemove(projectPath, distPaths, filesToExclude);

      if (!utils.isArray(filesToRemove)) return; // if no files to remove, there is nothing to do for us

      filesToRemove.forEach(fileToRemove => { // dividing remove files operations by groups
        const cleanDistFile = () => removeFiles(fileToRemove);
        opsLimiter.queue.push(cleanDistFile);
      });

      await opsLimiter.exec(); // executing operations by chunks
    }
  },
});

module.exports = removeFileReporter;
