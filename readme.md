## Usage

This Laravel Elixir extension allows you to compile Lost.

The current version is running on `laravel-elixir ^4.0.0`

## Installation

First, pull in the package though npm install

```
npm install --save laravel-elixir-lost
```

Next, add it to your gulpfile

```js
require('laravel-elixir-lost');
```

## Usage

this plugins now suppots sass, less and standard css

### Sass

```js
elixir(function(mix) {
	mix.sassLost('app.scss', 'public/css/app.css');
});
```

### Less

```js
elixir(function(mix) {
	mix.lessLost('app.less', 'public/css/app.css');
});
```

### Styles

```js
elixir(function(mix) {
	mix.stylesLost([
		'main.css',
		'grid.css',
	], 'public/css/app.css');
});
```