import gulp from 'gulp';
import plumber from 'gulp-plumber';
import config from '../config';
import browserSync from 'browser-sync';

export const htmlBuild = () => (
  gulp.src(`${config.src.root}/**/*.html`)
    .pipe(plumber())
    .pipe(gulp.dest(config.dest.root))
    .pipe(browserSync.create().reload({stream: true}))
);

export const htmlWatch = () => gulp.watch(`${config.src.root}/**/*.html`, htmlBuild);
