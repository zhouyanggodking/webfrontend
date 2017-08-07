const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

let isProd = process.env.NODE_ENV === 'production' ? true : false; //should use cross-env package
console.log('isProd: ' + isProd);
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(jpe?g|png|gif|svg)/,
            use: [
                'file-loader?name=[name].[ext]&outputPath=img/',
                'image-webpack-loader'
            ]
        }]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true,
        openPage: 'index.html'
    },

    plugins: [
        new CleanWebpackPlugin(['dist'], {
            verbose: true,
        }),
        new HtmlWebpackPlugin({
            template: './app/index.html',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true
        }),
        new ExtractTextWebpackPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]

};