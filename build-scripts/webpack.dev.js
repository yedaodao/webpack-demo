const path = require('path');
const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base');

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['webpack-dev-server/client/index.js?http://localhost:8081/'].concat(baseWebpackConfig.entry[name])
});

module.exports = merge(baseWebpackConfig, {
    devtool: '#eval-source-map'
});

