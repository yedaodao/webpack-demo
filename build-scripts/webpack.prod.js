const path = require('path');
const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base');

module.exports = merge(baseWebpackConfig, {
    devtool: false,
    plugins: []
});
