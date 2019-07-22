const webpack = require('webpack');
const ps = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({}),
        // new CleanWebpackPlugin(['dist'])
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }),
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    resolve: {
        alias: {
            utils: "./src/utils/",
        }
    }
};
