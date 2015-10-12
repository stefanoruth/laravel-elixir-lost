var elixir = require('laravel-elixir'),
	gulp = require('gulp'),
	lost = require('lost'),
	postcss = require('gulp-postcss'),
	sourcemaps = require('gulp-sourcemaps'),
	gulpif = require('gulp-if'),
	rename = require('gulp-rename');

var Task = elixir.Task;
var config = elixir.config;

elixir.extend('lost', function(src, output){

	new Task('lost', function(){
		return gulp.src(src)
					.pipe(rename(output))
					.pipe(gulpif(config.sourcemaps ,sourcemaps.init()))
					.pipe(postcss([
						lost()
					]))
					.pipe(gulpif(config.sourcemaps ,sourcemaps.write('./')))
					.pipe(gulp.dest('.'));
	}).watch(src);
});