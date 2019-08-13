const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackRTLPlugin = require('webpack-rtl-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    rules: [
        { 
            test: /\.(css|scss)$/, 
            use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', {
                loader: 'postcss-loader',
                options: { plugins: () => require('autoprefixer') }
            }] 
        },
        { 
            test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/, 
            use: ['file-loader'] 
        }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }),
    new MiniCssExtractPlugin({
        fileman: 'style.css'
    }),
    new webpackRTLPlugin({
        filename: 'style.css'
    })
  ]
};