const fs = require('fs/promises');
const path = require('path');

const getAllFiles = async dirPath => {
  const allFiles = [];
  const dirFiles = await fs.readdir(dirPath);

  for (const file of dirFiles) {
    const filePath = path.join(dirPath, file);
    const stats = await fs.stat(filePath); // eslint-disable-line no-await-in-loop

    if (stats.isDirectory()) {
      const files = await getAllFiles(filePath); // eslint-disable-line no-await-in-loop
      allFiles.push(...files);
      continue; // eslint-disable-line no-continue
    }

    allFiles.push(filePath);
  }

  return allFiles;
};

module.exports = getAllFiles;
