import gulp from 'gulp';
import sass from 'gulp-sass';
import * as dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import del from 'del';
import browserSync from 'browser-sync';
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sassCompiler = sass(dartSass);

// パスの設定
const paths = {
  styles: {
    src: 'scss/**/*.scss',
    dest: 'dist/css'
  },
  scripts: {
    src: 'src/**/*.js',
    dest: 'dist/js'
  },
  html: {
    src: 'index.html',
    dest: 'dist/'
  }
};

// Sassコンパイルタスク
function style() {
    return gulp.src(paths.styles.src)
        .pipe(sassCompiler({outputStyle: 'expanded'}).on('error', sassCompiler.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// JavaScriptコンパイルタスク
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// HTMLコピータスク
function html() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// クリーンタスク
function clean() {
  return del(['dist']);
}

// ビルドタスク
const build = gulp.series(clean, gulp.parallel(style, scripts, html));

// ウォッチタスク
function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch(paths.styles.src, style);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.html.src, html).on('change', browserSync.reload);
}

// デフォルトタスク
gulp.task('default', build);

export { style, scripts, html, clean, build, watch };
