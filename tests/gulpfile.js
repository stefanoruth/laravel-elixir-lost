var elixir = require('laravel-elixir');

require('../index.js');

elixir.config.sourcemaps = false;

elixir(function(mix){
	mix.sassLost('app.scss', 'public/css/sass.css')
		.lessLost('app.less', 'public/css/less.css')
		.stylesLost([
			'main.css',
			'grid.css',
		], 'public/css/styles.css');
});