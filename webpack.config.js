var path = require('path');

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname,'builds'),
        filename: "bundle.js",
        publicPath: '/builds/'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};