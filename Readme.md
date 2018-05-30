<p align="center">
<a href="https://www.npmjs.com/package/laravel-mix-dload"><img src="https://img.shields.io/npm/v/laravel-mix-download.svg" alt="NPM"></a>
<a href="https://npmcharts.com/compare/laravel-mix-dload?minimal=true"><img src="https://img.shields.io/npm/dt/laravel-mix-download.svg" alt="NPM"></a>
<a href="https://www.npmjs.com/package/laravel-mix-dload"><img src="https://img.shields.io/npm/l/laravel-mix-download.svg" alt="NPM"></a>
</p>



# Laravel Mix Download

This extension provides the possibility to download files for your Mix (v2.1 and up) builds.

## Usage

First, install the extension.

```
npm install laravel-mix-dload --save-dev
```

Then, require it within your `webpack.mix.js` file, like so:

```js
const mix = require('laravel-mix');

require('laravel-mix-dload');

mix
    .js('resources/assets/js/app.js', 'public/js')
    .less('resources/assets/less/app.less', 'public/css')
    .download({
        enabled: mix.inProduction(),
        urls: [
            {
                "url": "https://www.google-analytics.com/analytics.js",
                "dest": "./web/js/"
            },
        ],
    });
```

And you're done! Compile everything down with `npm run prod`.

## Options
Only `urls` is required - all other options are optional. If you don't want to use the paths object you can simply define your base and templates in the url and template options from `urls`

| Name             | Type               | Default              | Description   |
| ---------------- | ------------------ | -------------------- |-------------  |
| enabled          | `boolean`          | `mix.inProduction()` | set to false if you don't want to download files, set to true if you always want to download files no matter the env setting. |
| urls             | `array`            | `[]`                 | An array of url objects, each with a url and dest: `{ url: 'http://example.com/test.jpg', dest: './web/img' }` |
| dest             | `string`            | `''`                 | The string where the downloaded files need to be saved this overrides the specific url destination setting |