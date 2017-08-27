const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtracTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './app/main.js',
        compdemo: './app/component-demo.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtracTextWebpackPlugin.extract({
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtracTextWebpackPlugin.extract({
                        use: ['css-loader']
                    }),
                    scss: ExtracTextWebpackPlugin.extract({
                        use: ['css-loader', 'sass-loader']
                    })
                }
            }
        }, {
            test: /\.(png|jpe?g|gif|svg)/,
            use: [
                'file-loader?name=[name].[ext]&outputPath=img/'
            ]
        }]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        open: true,
        openPage: 'component-demo.html'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            chunks: ['main'],
            filename: 'index.html'
        }),

        new HtmlWebpackPlugin({
            template: './app/component-demo.html',
            chunks: ['compdemo'],
            filename: 'component-demo.html'
        }),

        new ExtracTextWebpackPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true
        })
    ]
};