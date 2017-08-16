const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtracTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtracTextWebpackPlugin.extract({
                use: ['css-loader', 'sass-loader']
            })
        }]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        open: true,
        openPage: 'index.html'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),

        new ExtracTextWebpackPlugin({
            filename: 'main.css',
            disable: false,
            allChunks: true
        })
    ]
};