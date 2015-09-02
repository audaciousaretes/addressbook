var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

var sassPaths = require("node-neat").with([
    path.resolve(__dirname, "./sass")
  ]).map(function(neatPath) {
    return "includePaths[]=" + neatPath;
}).join("&");

module.exports = {
    resolve: {
        modulesDirectories: ['node_modules', 'sass'],
        extensions: ['', '.json', '.jsx', '.js']
    },
    entry: {
        app: './src/js/app.js',
        // vendor: ['superagent']
    },
    output: {
        path: __dirname + '/dist',
        filename: '/js/bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            // Router: 'react-router'
        }),
        new ExtractTextPlugin("css/[name].css"),
    ],
    module: {
        loaders: [
            { test: /\.(?:jsx|js)$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass?' + sassPaths)},
            // { test: /\.json$/, loader: 'json-loader' }
        ]
    }
};
