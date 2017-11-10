var webpack = require('webpack');
//import webpack from 'webpack';
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-polyfill',
    entry: {
        index: [
            'babel-polyfill',
            './src/index'
        ]
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    'url-loader?limit=10000&name=img/[hash:8].[name].[ext]'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Three',
            filename: 'build/d3.html',
            template: './svg/polyline.html',
            inject: 'body',
            hash: true,
            chunks: ['index']
            })
        ]
}