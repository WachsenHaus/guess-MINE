import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";
import del from "del";
import bro from "gulp-browserify";

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles",
    watch: "assets/scss/**/*.scss",
  },
  js: {
    src: "assets/js/main.js", //*.js는 모든 파일을 컴파일 하겠다는 뜻이다. 내가 원하는건 딱 하나의 파일.
    dest: "src/static/js",
    watch: "assets/js/**/*.js",
  },
};
export const styles = () =>
  gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.styles.dest));

const watchFiles = () => {
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.js.watch, js);
};
const js = () => {
  gulp.src(paths.js.src).pipe(bro()).pipe(gulp.dest(paths.js.dest));
};

const clean = () => del("src/static"); //폴더를 지운다.

const dev = gulp.series([clean, styles, js, watchFiles]);
export default dev;
