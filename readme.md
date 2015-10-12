## Usage

This Laravel Elixir extension allows you to compile Stylus.

## Installation

First, pull in the package though npm install

```
npm install --save laravel-elixir-lost
```

Next, add it to your gulpfile

```js
var elixir = require('laravel-elixir');

require('laravel-elixir-lost');

elixir(function(mix) {
   mix.lost('public/css/app.css', 'public/css');
});
```

## Usage

Assuming you write...

```js
elixir(function(mix) {
	mix.sass('app.scss', 'css/lost.css')
		.lost('css/lost.css', 'css/app.css');
});
```

...this will run your css file thought the LostGrid
