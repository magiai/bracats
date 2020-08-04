const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './public/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      '@babel/preset-env',
                    ]
                  }
                }
            },
            {
              test: /\.css$/,
              sideEffects: true,
              use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
              ],
            },

            {
              test: /\.(png|jpe?g|gif|svg)$/,
              use: [
                  {
                    loader: 'file-loader',
                    options: {
                      outputPath: 'img'
                    }
                  }
              ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: __dirname + '/public/index.html',
          filename: 'bundle.html',
          inject: 'body'
        }),
        new MiniCssExtractPlugin({
          // publicPath: __dirname + '/public/css/styles.css',
          filename: 'bundle.css',
        })
    ]
};

