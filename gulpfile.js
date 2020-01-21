const gulp = require('gulp');
const path = require('path');
const tsBrowser = require('@hopin/wbt-ts-browser'); 
const css = require('@hopin/wbt-css');
const clean = require('@hopin/wbt-clean');
const fs = require('fs-extra');

const themeSrc = path.join(__dirname, 'src');
const themeDst = path.join(__dirname, 'build');
const themeName = 'hopin-base-theme';
const themeInSitePath = path.join(__dirname, '..', '..', `themes`, `${themeName}-build`);

gulp.task('clean', gulp.series(
  clean.gulpClean({
    src: themeSrc,
    dst: themeDst,
  }),
))

gulp.task('typescript', gulp.series(
  tsBrowser.gulpBuild('hopin.hugobasetheme', {
    src: themeSrc,
    dst: themeDst,
  })
))

gulp.task('css', gulp.series(
  css.gulpBuild({
    src: themeSrc,
    dst: themeDst,
  }, {
    importPaths: [themeSrc],
  }),
))

gulp.task('copy', gulp.series(
  () => {
    return gulp.src(path.join(themeSrc, '**/*.{toml,json,ico,html,svg}'))
    .pipe(gulp.dest(themeDst));
  }
))

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel(
    'typescript',
    'css',
    'copy',
  ),
))

gulp.task('copy-into-site', async () => {
  const exists = await fs.exists(themeInSitePath);
  if (exists) {
    await fs.remove(themeInSitePath);
  }
  await fs.mkdirp(themeInSitePath);
  await fs.copy(themeDst, themeInSitePath);
})

gulp.task('build-into-site', gulp.series(
  'build',
  'copy-into-site',
))

gulp.task('watch', () => gulp.watch([path.join(themeSrc, '**', '*')], {
  ignoreInitial: false,
}, gulp.series('build')))