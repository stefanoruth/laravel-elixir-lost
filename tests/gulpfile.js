var elixir = require('laravel-elixir');

require('../index.js');

elixir.config.assetsPath = '';
elixir.config.sourcemaps = false;
elixir.config.css.sass.folder = '';

elixir(function(mix){
	mix.sass('app.scss', 'css/lost.css')
		.lost('css/lost.css', 'css/app.css');
});