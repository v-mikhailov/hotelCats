const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    main: './src/index.js',
    catalog: './src/catalog.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: { loader: 'babel-loader'},
      exclude: /node_modules/,
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            disable: true,
          }
        }
      ]
    },
    {
      test: /\.(woff|woff2|ttf|otf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name]/[ext]'
          }
        }
      ]
    },
    {
      test: /\.(css|sass|scss)$/i,
      use: [
        (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
        'css-loader',
        'sass-loader',
        'postcss-loader'
      ],
    },
    ]
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, "images")
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/catalog.html',
      filename: 'catalog.html'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
          preset: ['default'],
      },
      canPrint: true
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
     }),
  ],
};