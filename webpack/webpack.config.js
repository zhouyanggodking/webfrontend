var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {    
    entry: {
        index: './app/index.js',
    },
    output: {
        filename: 'index.js',
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
    //plugins: [
    //    new webpack.optimize.CommonsChunkPlugin({
    //        names: ['vendor', 'manifest']
    //    }),
    //    new ExtractTextPlugin('styles.css')
    //]
};