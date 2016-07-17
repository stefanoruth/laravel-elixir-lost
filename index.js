var CssTask = require('laravel-elixir/dist/tasks/CssTask').default;

/*
 * Lost Module Config
 */
Elixir.config.css.lost = {
	tempFile: Elixir.config.publicPath+'/'+Elixir.config.css.outputFolder+'/lost.css',

	plugin: require('gulp-postcss'),
	pluginOptions: [
		require('lost'),
	],
};

/*
 * Lost Task Compiler
 */
var lostTask = function(output) {
	var paths = new Elixir.GulpPaths()
					.src(Elixir.config.css.lost.tempFile, '')
					.output(output || Elixir.config.get('public.css.outputFolder'), 'app.css');

	new CssTask('lost', paths).watch(paths.src.path);
};

/**
 * Lost Compiler for Sass & Scss
 */
Elixir.extend('sassLost', function() {
	Elixir.mixins.sass(arguments[0], Elixir.config.css.lost.tempFile);
	lostTask(arguments[1]);
});

/**
 * Lost Compiler for Less
 */
Elixir.extend('lessLost', function() {
	Elixir.mixins.less(arguments[0], Elixir.config.css.lost.tempFile);
	lostTask(arguments[1]);
});

/**
 * Lost Compiler for styles
 */
Elixir.extend('stylesLost', function() {
	Elixir.mixins.styles(arguments[0], Elixir.config.css.lost.tempFile);
	lostTask(arguments[1]);
});