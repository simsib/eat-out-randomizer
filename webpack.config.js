var path = require('path');

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
    }
};