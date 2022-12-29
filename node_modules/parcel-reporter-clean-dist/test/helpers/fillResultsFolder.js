const fs = require('fs/promises');

module.exports = async () => {
  await fs.mkdir(`${process.cwd()}/test/results/embed/embed2`, { recursive: true });
  await fs.copyFile(`${process.cwd()}/test/fixtures/files/file1.txt`, `${process.cwd()}/test/results/file1.txt`);
  await fs.copyFile(
    `${process.cwd()}/test/fixtures/files/embed/file2.txt`,
    `${process.cwd()}/test/results/embed/file2.txt`,
  );
  await fs.copyFile(
    `${process.cwd()}/test/fixtures/files/embed/embed2/file3.txt`,
    `${process.cwd()}/test/results/embed/embed2/file3.txt`,
  );
};
