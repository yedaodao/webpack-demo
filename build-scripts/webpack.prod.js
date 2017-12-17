const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./app.js']
    },
    output: {
        path: path.join(__dirname, '../build'),
        filename: 'bundle.[hash].js',
        publicPath: "/"
    },
    module: {
        rules:  [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules(\/|\\)attr-accept|node_modules(\/|\\)disposables)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['env'],
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: 'test-log.html',
            template: path.join(__dirname, '../src/apps/for-log/test-log.html')
        })
    ]
};
