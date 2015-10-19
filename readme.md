## Usage

This Laravel Elixir extension allows you to compile Lost.

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

Assuming you write...

```js
elixir(function(mix) {
	mix.sass('app.scss', 'public/css/lost.css')
		.lost('../../public/css/lost.css', 'public/css/app.css');
});
```

...this will run your css file thought the LostGrid
