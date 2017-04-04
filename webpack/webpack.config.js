var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {    
    entry: {
        index: './app/index.js',
        vendor: ['angular', 'jquery']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        watchContentBase: true,
        clientLogLevel: "info",
        open: true,
        inline: true,
        port: 9090
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        },
        {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            verbose: true,
            //root: './'
        }),
        new CopyWebpackPlugin([
            {
                from: './app/index.html'
            }
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
};