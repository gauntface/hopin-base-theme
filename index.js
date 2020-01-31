const fs = require('fs-extra');
const path = require('path');

async function copyTheme(dstDir) {
  await fs.mkdirp(dstDir);
  await fs.copy(path.join(__dirname, 'build'), dstDir);
}

module.exports = {
  copyTheme,
};