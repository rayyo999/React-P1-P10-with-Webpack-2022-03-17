const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].bundle.js',
    },
    devServer:{
        static: path.resolve(__dirname, 'dist'),
        open:true,
        historyApiFallback:true
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[hash].css',
        }),
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html',
        }),
    ]
};