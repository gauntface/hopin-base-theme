const fs = require('fs-extra');
const test = require('ava');
const path = require('path');
const os = require('os');
const {copyTheme} = require('../index');
const dircompare = require('dir-compare');

test('only include single copy of tag class and attrib assets', async (t) => {
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'hugo-base-theme-'));
  await copyTheme(tmpDir);

  const src = path.join(__dirname, '..', 'build')
  const result = await dircompare.compare(src, tmpDir, {
    compareSize: true,
  })
  if (!result.same) {
    console.log(`Directories are not equal: `, result)
  }
  t.truthy(result.same)
})