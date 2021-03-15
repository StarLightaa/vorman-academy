import gulp from 'gulp';
import plumber from 'gulp-plumber';
import config from '../config';

export const htmlBuild = () => (
  gulp.src(`${config.src.root}/**/*.html`)
    .pipe(plumber())
    .pipe(gulp.dest(config.dest.root))
);

export const htmlWatch = () => gulp.watch(`${config.src.root}/**/*.html`, htmlBuild);
