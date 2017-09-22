var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var config = {
    devtool: 'eval',
    entry: [
        './src/App',
        'webpack-hot-middleware/client'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loaders: ['react-hot-loader', 'babel-loader'],
                include: [path.join(__dirname, 'src')]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['style-loader', 'css-loader'])
            }
        ]
    },
    plugins: [
        // OccurenceOrderPlugin is needed for webpack 1.x only
        // Use NoErrorsPlugin for webpack 1.x
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "BROWSER": "true"
            }
        }),
        new ExtractTextPlugin("[name].css")
    ]
}

module.exports = config;
