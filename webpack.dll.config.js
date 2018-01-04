const webpack = require('webpack');
const path = require('path');
const isDebug = process.env.NODE_ENV === 'development';
const outputPath = isDebug ? path.join(__dirname, 'src/dll/debug') : path.join(__dirname, 'src/dll/dist');

// 资源依赖包，提前编译
const lib = [
    'react',
    './src/lib/moduleA'
];

module.exports = {
    devtool: '#source-map',
    entry: {
        lib: lib
    },
    output: {
        path: outputPath,
        filename: '[name]_[hash].js',
        library: '[name]_[hash]_dll',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(outputPath, 'manifest.json'),
            name: '[name]_[hash]_dll'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ]
};