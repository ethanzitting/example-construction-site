// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/js/index.js', 'docs')
    .sass('src/scss/index.scss', 'css')
    .setPublicPath('docs');