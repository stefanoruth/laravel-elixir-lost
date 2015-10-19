var Elixir = require('laravel-elixir'),
	lost = require('lost'),
	compile = require('laravel-elixir/tasks/shared/Css');

var Task = Elixir.Task;
var config = Elixir.config;

Elixir.extend('lost', function(src, output, options){
	config.css.lost = {
		folder: '',

		pluginOptions: [
			lost()
		]
	};

	new Elixir.Task('lost', function(){
		var paths = new Elixir.GulpPaths()
						.src(src, config.get('assets.css.lost.folder'))
						.output(output || config.get('public.css.outputFolder'), 'app.css');


		return compile({
			name: 'Lost',
            compiler: require('gulp-postcss'),
            src: paths.src,
            output: paths.output,
            task: this,
            pluginOptions: options || config.css.lost.pluginOptions,
		});
	}).watch(src);
});