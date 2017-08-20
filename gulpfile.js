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
const bom = require('gulp-bom')

const paths = {
  js: './src/js',
  html: './src/index.html',
  css: './src/css',
  images: './src/images',
  audio: './src/audio',
  fonts: './src/fonts',
  dist: './dist'
}

gulp.task('clean', () => {
  return del([paths.dist])
})

gulp.task('copy', (cb) => {
  return pump([
    gulp.src([
      `${paths.css}/*.css`,
      `${paths.images}/*`,
      `${paths.audio}/*.mp3`,
      `${paths.fonts}/*`,
      `${paths.js}/html5shiv.js`
    ]),
    gulpif('*.css', cleanCSS()),
    copy(paths.dist),
    gulp.dest(paths.dist)
  ])
})

gulp.task('build', (cb) => {
  pump([
    gulp.src([`${paths.html}`]),
    useref(),
    gulpif('*.js', babel()),
    gulpif('*.js', uglify()),
    gulpif('*.css', cleanCSS()),
    bom(),
    gulp.dest(paths.dist)
  ], cb)
})

gulp.task('default', sequence('clean', ['copy', 'build']))
