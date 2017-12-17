function InlineWebpackPlugin(options) {
    // Configure your plugin with options...
    console.log(options);
}

InlineWebpackPlugin.prototype.apply = function (compiler) {
    compiler.plugin("compilation", function (compilation) {
        compilation.plugin('html-webpack-plugin-alter-asset-tags', function (context, callback) {
            context.body[0].attributes.inline = 'true';
            callback(null, context);
        });
        compiler.plugin("html-webpack-plugin-after-emit", function (context, callback) {
            console.log(context);
            callback(null, context);
        })
    });

    compiler.plugin("emit", function(compilation, callback) {
        console.log(compilation);
        callback();
    });

};

module.exports = InlineWebpackPlugin;
