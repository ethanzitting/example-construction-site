const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/js/index.js', './src/scss/index.scss'],
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};