const assert = require('assert');

const fs = require('fs/promises');

const removeFiles = require('../../src/removeFiles');

const cleanResultsFolder = require('../helpers/cleanResultsFolder');
const fillResultsFolder = require('../helpers/fillResultsFolder');
const getAllFiles = require('../helpers/getAllFiles');

const rootPath = `${process.cwd()}/test`;

describe('Remove files recursively', () => {
  beforeEach(async () => {
    await cleanResultsFolder();
    await fillResultsFolder();
  });

  const targetPath = `${rootPath}/results`;

  it('should remove file inside specified folder when file1.txt chosen', async () => {
    await removeFiles(`${rootPath}/results/file1.txt`);
    await assert.rejects(fs.access(`${rootPath}/results/file1.txt`));
    const files = await getAllFiles(targetPath);
    assert.equal(files.length, 2);
  });

  it('should remove files inside specified folder when files/embed/* chosen', async () => {
    await removeFiles(`${rootPath}/results/embed/`);
    await assert.rejects(fs.access(`${rootPath}/results/file2.txt`));
    await assert.rejects(fs.access(`${rootPath}/results/embed2/file3.txt`));
    const files = await getAllFiles(targetPath);
    assert.equal(files.length, 1);
  });

  it('should remove files inside specified folder when files/**/* chosen', async () => {
    await removeFiles(`${rootPath}/results/`);
    await assert.rejects(fs.access(`${rootPath}/results/file1.txt`));
    await assert.rejects(fs.access(`${rootPath}/results/embed/file2.txt`));
    await assert.rejects(fs.access(`${rootPath}/results/embed/embed2/file3.txt`));
  });

  it("shouldn't return an error when a provided file is not exists", async () => {
    await assert.doesNotReject(removeFiles(`${rootPath}/results/foo/bar.js`));
  });
});
