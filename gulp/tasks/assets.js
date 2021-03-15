import gulp from 'gulp';
import config from '../config';

const fontsBuild = () => (
  gulp.src(`${config.src.fonts}/**/*`)
    .pipe(gulp.dest(config.dest.fonts))
);

// const videoBuild = () => (
//   gulp.src('src/assets/video/**/*')
//     .pipe(gulp.dest(config.dest.video))
// );

export const assetsBuild = gulp.parallel(fontsBuild);

export const assetsWatch = () => {
  gulp.watch(`${config.src.fonts}/**/*`, fontsBuild);
  // gulp.watch(`${config.src.fonts}/**/*`, videoBuild);
};
