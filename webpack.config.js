
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: './dist'
    },
    module: {
        loaders: [{
            test: /\.js/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};