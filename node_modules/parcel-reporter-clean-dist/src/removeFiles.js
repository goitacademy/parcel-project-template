const fs = require('fs/promises');
const path = require('path');

const utils = require('./utils');

/**
 * Remove of target directory/file.
 * @param {String} filePath directory of file path
 * @param {Boolean} isFile determine is it a file or not
 * @returns {Promise<void>}
 */

const rmFn = async (filePath, isFile = true) => {
  if (!isFile) {
    await fs.rmdir(filePath);
    return;
  }

  await fs.unlink(filePath);
};

const recursiveFilesRemoval = async targetPath => {
  const [err, mainStats] = await utils.await(fs.stat(targetPath));
  if (err) { // if a file/folder doesn't exist we just terminate this process at the beginning
    if (err.code !== 'ENOENT') { // if an error is related to a different code, then it worth throwing it
      throw err;
    }

    return;
  }

  if (mainStats.isFile()) { // if target is a file
    await rmFn(targetPath);
    return;
  }

  const fileNames = await fs.readdir(targetPath);

  await Promise.all(fileNames.map(async fileName => { // removing all files inside the target dir
    const filePath = path.posix.join(targetPath, fileName);
    const stats = await fs.stat(filePath);

    if (stats.isDirectory()) {
      await recursiveFilesRemoval(filePath);
      return;
    }

    await rmFn(filePath);
  }));

  await rmFn(targetPath, false); // after all files removed, we finally purge the target dir
};

/**
 * Recursively removes all folders & files on specified path.
 * @param {String} _targetPath root directory/file to start from
 * @returns {Promise<void>}
 */

const removeFiles = _targetPath => {
  const targetPath = path.posix.normalize(_targetPath);
  return recursiveFilesRemoval(targetPath);
};

module.exports = removeFiles;
