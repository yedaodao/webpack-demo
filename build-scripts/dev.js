var path = require('path'),
    webpack = require('webpack'),
    WebpackDevServer = require("webpack-dev-server");

var webpackConfig = require('./webpack.dev');

var compiler = webpack(webpackConfig),
    server = new WebpackDevServer(compiler, {
        contentBase: path.join(__dirname, '../build'),
        port: 8081,
        clientLogLevel: "warning",
        stats: {colors: true},
        publicPath: '/',
        headers: {"Access-Control-Allow-Origin": "*"}
    });
compiler.plugin('done', function () {
    console.log('compile done');
});
server.listen(8081, 'localhost', function () {
    console.log("Starting static server on http://localhost:" + 8081);
});

