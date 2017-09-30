const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const sequence = require('gulp-sequence')
const del = require('del')
const useref = require('gulp-useref')
const gulpif = require('gulp-if')
const cleanCSS = require('gulp-clean-css')
const pump = require('pump')
const copy = require('gulp-copy')

const paths = {
  src: './client',
  js: './client/js',
  html: './client/index.html',
  htmlButton: './client/button.html',
  htmlButtonNotFound: './client/button-not-found.html',
  css: './client/css',
  audio: './client/audio',
  dist: './dist'
}

gulp.task('clean', () => {
  return del([paths.dist])
})

gulp.task('copy', (cb) => {
  return pump([
    gulp.src([
      `${paths.js}/binary.min.js`,
      `${paths.src}/*`,
      `!${paths.src}/*.html`
    ]),
    copy(paths.dist, {prefix: 1}),
    gulp.dest(paths.dist)
  ])
})

gulp.task('build', (cb) => {
  pump([
    gulp.src([`${paths.html}`, `${paths.htmlButton}`, `${paths.htmlButtonNotFound}`]),
    useref(),
    gulpif('*.js', babel()),
    gulpif('*.js', uglify()),
    gulpif('*.css', cleanCSS()),
    gulp.dest(paths.dist)
  ], cb)
})

gulp.task('default', sequence('clean', ['copy', 'build']))
