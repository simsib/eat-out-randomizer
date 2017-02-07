# eat-out-randomizer
npm install -g babel webpack webpack-dev-server 
npm install react react-dom --save
npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save
mkdir src 
touch src/index.html src/App.js src/main.js
mkdir configs 
touch configs/webpack.config.js


module.exports = {
    entry: '../src/main.js',
    output: {
        path: '../build/',
        filename: 'index.js'
    },
    devServer:{
        inline:true,
        port:8080,
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    }
}