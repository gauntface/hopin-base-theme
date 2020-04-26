const gulp = require('gulp');
const path = require('path');
const tsBrowser = require('@hopin/wbt-ts-browser'); 
const css = require('@hopin/wbt-css');
const clean = require('@hopin/wbt-clean');
const fs = require('fs-extra');
const hugo = require('@gauntface/hugo-node');
const hopinstyleguide = require('@hopin/hugo-styleguide');
const spawn = require('child_process').spawn;
const basetheme = require('./index');

const themeSrc = path.join(__dirname, 'src');
const themeDst = path.join(__dirname, 'build');
const themeName = 'hopin-base-theme';

gulp.task('clean', gulp.series(
  clean.gulpClean([themeDst]),
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
  basetheme.copyTheme(path.join(__dirname, `example`, 'themes', `hopin-base-theme`));
})

gulp.task('styleguide-theme', () => {
  return hopinstyleguide.copyTheme(path.join(__dirname, `example`, `themes`, 'hopin-styleguide'));
})

gulp.task('styleguide-content', () => {
  return hopinstyleguide.copyContent(path.join(__dirname, `example`, `content`, 'styleguide'));
})

gulp.task('build-into-site', gulp.series(
  'build',
  'copy-into-site',
))

let serverInstance;

function startServer() {
  serverInstance = spawn('hugo', ['server', '-D', '--ignoreCache'], {
    stdio: 'inherit',
    cwd: path.join(__dirname, 'example'),
  });
  serverInstance.on('error', (err) => {
    console.error('Failed to run hugo server: ', err);
  });
  serverInstance.addListener('exit', (code) => {
    console.error('Hugo server has exited: ', code);
    setTimeout(startServer, 500);
  });
}

gulp.task('hugo-server',
  gulp.series(startServer)
);

gulp.task('restart-server', async () => {
  if (!serverInstance) {
    return;
  }

  serverInstance.kill();
});

gulp.task('watch-theme', () => {
  const opts = {
    ignoreInitial: false,
  };
  return gulp.watch(
    [path.join(themeSrc, '**', '*')],
    opts,
    gulp.series('build'),
  );
});

gulp.task('watch', 
  gulp.series(
    'build-into-site',
    'styleguide-theme',
    'styleguide-content',
    gulp.parallel(
      'hugo-server',
      () => gulp.watch([path.join(themeSrc, '**', '*')], {
        ignoreInitial: false,
      }, gulp.series('build-into-site', 'restart-server')),
    ),
  )
)