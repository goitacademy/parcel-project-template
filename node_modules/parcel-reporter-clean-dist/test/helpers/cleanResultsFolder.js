const fs = require('fs/promises');

module.exports = () => fs.rm(`${process.cwd()}/test/results`, { recursive: true, force: true });
