var Elixir = require('laravel-elixir'),
	lost = require('lost'),
	compile = require('laravel-elixir/tasks/shared/Css'),
	gulp = require('gulp');

var config = Elixir.config;

/*
 * Lost Module Config
 */
config.css.lost = {
	tempFile: config.publicPath+'/'+config.css.outputFolder+'/lost.css',

	pluginOptions: [
		lost()
	],
};

/*
 * Lost Task Compiler
 */
var lostTask = function(src, output) {
	var paths = new Elixir.GulpPaths()
							.src(src, '')
							.output(output || config.get('public.css.outputFolder'), 'app.css');

	new Elixir.Task('lost', function(){
		return compile({
			name: 'Lost',
            compiler: require('gulp-postcss'),
            src: paths.src,
            output: paths.output,
            task: this,
            pluginOptions: config.css.lost.pluginOptions,
		});
	}).watch(paths.src.path);
};

/**
 * Lost Compiler for Sass & Scss
 */
Elixir.extend('sassLost', function() {
	Elixir.mixins.sass(arguments[0], config.css.lost.tempFile);
	lostTask(config.css.lost.tempFile, arguments[1]);
});

/**
 * Lost Compiler for Less
 */
Elixir.extend('lessLost', function() {
	Elixir.mixins.less(arguments[0], config.css.lost.tempFile);
	lostTask(config.css.lost.tempFile, arguments[1]);
});

/**
 * Lost Compiler for styles
 */
Elixir.extend('stylesLost', function() {
	Elixir.mixins.styles(arguments[0], config.css.lost.tempFile);
	lostTask(config.css.lost.tempFile, arguments[1]);
});