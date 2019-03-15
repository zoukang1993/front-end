// plugins 
//resolve loader not complete event

// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');  // npm install this
const webpack = require('webpack');   // inner plugin
const path = require('path');

const config = {
    entry: './path/to/my/entry/file.js',
    output: {
        filename: 'my-first-webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            }
        ]    
    },
    plugins: {
        new webpack.ooptimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
    }
};

module.exports = config;



