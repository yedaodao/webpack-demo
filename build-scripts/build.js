var path = require('path'),
    webpack = require('webpack');

var webpackConfig = require('./webpack.prod');

webpack(webpackConfig, function (err, stats) {
    if (err) {
        console.log(err);
    }
    console.log(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }));
});