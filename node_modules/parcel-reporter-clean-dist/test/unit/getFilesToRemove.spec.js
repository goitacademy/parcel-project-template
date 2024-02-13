const assert = require('assert');

const getFilesToRemove = require('../../src/getFilesToRemove');

const rootPath = `${process.cwd()}/test/fixtures`;

describe('Get files to remove', () => {
  it('should return only files which not contain the current build when no configuration is provided', async () => {
    const projectPath = `${rootPath}/packageV1`;
    const distPaths = [`${projectPath}/files`];
    const filesToExclude = [`${projectPath}/files/file1.txt`];
    const filesToRemove = await getFilesToRemove(projectPath, distPaths, filesToExclude);

    const expectedResult = [`${projectPath}/files/embed`];
    assert.deepEqual(filesToRemove, expectedResult);
  });

  it('should return only files which include in the configuration', async () => {
    const projectPath = `${rootPath}/packageV2`;
    const distPaths = [`${projectPath}/files`];
    const filesToRemove = await getFilesToRemove(projectPath, distPaths);

    const expectedResult = [`${projectPath}/files/file1.txt`];
    assert.deepEqual(filesToRemove, expectedResult);
  });

  it('should return only files that chosen in the configuration', async () => {
    const projectPath = `${rootPath}/packageV3`;
    const distPaths = [`${projectPath}/files`];
    const filesToExclude = [];
    const filesToRemove = await getFilesToRemove(projectPath, distPaths, filesToExclude);

    const expectedResult = [`${projectPath}/files/file1.txt`, `${projectPath}/files/embed/file2.txt`];
    assert.deepEqual(filesToRemove, expectedResult);
  });

  it('should return files which contains dist directories', async () => {
    const projectPath = `${rootPath}/packageV4`;
    const distPaths = [`${projectPath}/files`];
    const filesToRemove = await getFilesToRemove(projectPath, distPaths);

    const expectedResult = [`${projectPath}/files/embed/embed2/file3.txt`];
    assert.deepEqual(filesToRemove, expectedResult);
  });

  it('should return files inside of embeded directories', async () => {
    const projectPath = `${rootPath}/packageV1`;
    const distPaths = [`${projectPath}/files/embed`];
    const filesToExclude = [`${projectPath}/files/embed/embed2/file3.txt`];
    const filesToRemove = await getFilesToRemove(projectPath, distPaths, filesToExclude);

    const expectedResult = [`${projectPath}/files/embed/file2.txt`];
    assert.deepEqual(filesToRemove, expectedResult);
  });

  it("shouldn't return files outside of dist directories", async () => {
    const projectPath = `${rootPath}/packageV5`;
    const filesToRemove = await getFilesToRemove(projectPath, [`${__dirname}/files`]);

    const expectedResult = [];
    assert.deepEqual(filesToRemove, expectedResult);
  });

  it("shouldn't return files in block list", async () => {
    const projectPath = `${rootPath}/packageV5`;
    const distPaths = [`${projectPath}/files`];
    const filesToExclude = [`${projectPath}/files/embed/embed2/file3.txt`];
    const filesToRemove = await getFilesToRemove(projectPath, distPaths, filesToExclude);

    const expectedResult = [`${projectPath}/files/file1.txt`, `${projectPath}/files/embed/file2.txt`];
    assert.deepEqual(filesToRemove, expectedResult);
  });
});
