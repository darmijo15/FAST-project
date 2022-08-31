const path = require('path');
const config = require('./webpack.config');
const { merge } = require('webpack-merge');

module.exports = merge(config, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
});