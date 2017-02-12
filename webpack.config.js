var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname,'builds'),
        filename: "bundle.js",
        publicPath: '/builds/'
    },
    devServer:{
        contentBase: 'src'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        })
    ],
    resolve: {
        alias: {
            'jquery': path.resolve(__dirname, 'node_modules/jquery/dist/jquery.js'),
        }
    },
};