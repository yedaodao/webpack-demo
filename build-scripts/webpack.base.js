const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dllPath = path.join(__dirname, '../src/dll/dist/manifest.json'),
    dllFileName = require(dllPath).name + '.js';

module.exports = {
    entry: {
        dllApp: ['./src/apps/dll/app.js']
    },
    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].[hash].js',
        publicPath: "/"
    },
    module: {
        rules: [
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
        new CopyWebpackPlugin([{
            context: path.join(__dirname, '../src'),
            from: './dll/**/*',
            to: './'
        }]),
        new HtmlWebpackPlugin({
            chunks: ['dllApp'],
            inject: 'body',
            filename: 'dll.html',
            template: path.join(__dirname, '../src/apps/dll/dll.html')
        }),
        new webpack.DllReferencePlugin({
            content: require(dllPath).content,
            name: 'lib_8af652777d6b01bba04f_dll',
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: [path.join('dll/dist/lib_8af652777d6b01bba04f.js')],
            append: false,
        })
    ]
};
