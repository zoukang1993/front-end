const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
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
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({}),
        new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }),
        new WebpackBar({}),
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
};
