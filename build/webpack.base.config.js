/*
 * @Author: Michael 
 * @Date: 2018-05-11 15:01:42 
 * @Last Modified by: Michael
 * @Last Modified time: 2018-06-12 15:34:12
 */

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production';

const pluginList = [
  new ExtractTextPlugin({
    filename: 'common.[chunkhash].css'
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
];

module.exports = {
  devtool: '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name]-[chunkhash].js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public'),
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.vue']
  },
  module: {
    noParse: /es6-promise\.js$/,
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [path.resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            preserveWhitespace: false,
            postcss: [
              require('autoprefixer')({
                browsers: ['last 3 versions']
              })
            ]
          }
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.json/,
        use: 'json-loader'
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: 'warning'
  },
  plugins: isProd ? [
    new UglifyJSPlugin(),
    ...pluginList
  ] : [
      ...pluginList
    ]
}