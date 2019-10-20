const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
require('@babel/register');

const config = {
    entry: path.resolve(__dirname, 'src/js/main.js'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        alias: {}
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.glsl$/,
                include: path.resolve(__dirname, 'src/shaders'),
                use: ['webpack-glsl']
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Antivaxer 💉',
            filename: 'index.html',
            hash: true
        })
    ],

    mode: 'production',

    devtool: 'source-map'
};

module.exports = config;
